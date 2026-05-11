import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleGenerativeAI, GenerativeModel, ChatSession } from '@google/generative-ai';
import { environment } from 'src/environments/environment';
import { ItemService } from './item.service';
import { firstValueFrom, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataCacheService } from './data-cache.service'; // Import DataCacheService

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private chat: ChatSession | null = null;
  private manuals = [
    'jaws_keystrokes.txt', 
    'jaws_atajos.txt',
    'nvda_keystrokes.txt', 
    'nvda_atajos.txt',
    'jaws_braille_commands.txt', 
    'jaws_braille_commandos.txt',
    'jaws_quickstart.txt', 
    'orbit.txt'
  ];

  constructor(
    private itemService: ItemService,
    private http: HttpClient,
    private dataCache: DataCacheService // Inject DataCacheService
  ) {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  }

  async generateTextWithContext(prompt: string, specializedMode?: string): Promise<string> {
    try {
      // Get context from the database
      const items = await firstValueFrom(this.itemService.getItems());
      const relevantItems = items.filter(item => {
        const promptLower = prompt.toLowerCase();
        const itemLower = item.item ? item.item.toLowerCase() : '';
        const categoryLower = item.category ? item.category.toLowerCase() : '';
        return (itemLower && promptLower.includes(itemLower)) || (categoryLower && promptLower.includes(categoryLower));
      });

      let dbContext = '';
      if (relevantItems.length > 0) {
        dbContext = 'Información relevante de la base de datos de Tiflodudas:\n';
        relevantItems.forEach(item => {
          dbContext += `Para la categoría '${item.category}' y dispositivo '${item.item}', la consulta '${item.consult}' tiene la respuesta: '${item.answer}'.`;
          if (item.comments) {
            dbContext += ` Comentarios adicionales: ${item.comments}.`;
          }
          dbContext += '\n';
        });
      }

      // Get context from manuals with caching
      const manualPromises = this.manuals.map(async manual => {
        const cacheKey = `manual_${manual}`;
        let content = await this.dataCache.get(cacheKey);

        if (content) {
          return { manual, content: content as string };
        } else {
          return firstValueFrom(
            this.http.get(`assets/manuals/${manual}`, { responseType: 'text' }).pipe(
              map(c => {
                this.dataCache.set(cacheKey, c);
                return { manual, content: c };
              }),
              catchError(error => {
                console.error(`Error loading or caching manual ${manual}:`, error);
                return of({ manual, content: null });
              })
            )
          );
        }
      });

      const manualContents = await Promise.all(manualPromises);
      
      let manualContext = '';
      const promptWords = prompt.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      
      manualContents.forEach(mc => {
        if (mc.content) {
          const contentLower = mc.content.toLowerCase();
          const hasKeyword = promptWords.some(word => contentLower.includes(word));
          
          // New logic: include manual if keywords match OR if it's the right manual for the specialized mode
          const isRelevantForMode = 
            (specializedMode === 'lectores' && (mc.manual.includes('jaws') || mc.manual.includes('nvda'))) ||
            (specializedMode === 'braille' && mc.manual.includes('orbit'));

          if (hasKeyword || isRelevantForMode || contentLower.includes(prompt.toLowerCase())) {
            if (manualContext === '') {
              manualContext = 'Contexto de los manuales (pueden estar en inglés):\n';
            }
            
            // If the manual is large, try to find the relevant part
            let snippet = mc.content;
            if (snippet.length > 5000) {
              // Try to find a relevant section even if in different language (e.g. by technical terms)
              const index = contentLower.indexOf(prompt.toLowerCase());
              if (index !== -1) {
                const start = Math.max(0, index - 2500);
                const end = Math.min(snippet.length, index + 2500);
                snippet = snippet.substring(start, end);
              } else {
                snippet = snippet.substring(0, 5000); // Default to beginning if no match
              }
            }
            
            manualContext += `Manual: ${mc.manual}\n...${snippet}...\n\n`;
          }
        }
      });

      let systemInstructions = 'Basándote en la información proporcionada, responde a la siguiente pregunta del usuario de forma concisa. Solo proporciona la respuesta.';
      
      if (specializedMode === 'lectores') {
        systemInstructions = 'Eres el asistente experto en Lectores de Pantalla de Tiflo IA. Los manuales adjuntos están en inglés, pero debes traducir la información y responder siempre en CASTELLANO de forma clara y accesible.';
      } else if (specializedMode === 'braille') {
        systemInstructions = 'Eres el asistente experto en Líneas Braille de Tiflo IA. Los manuales adjuntos están en inglés, pero debes traducir la información y responder siempre en CASTELLANO de forma clara y accesible.';
      }

      const finalPrompt = `${manualContext}${dbContext}\n${systemInstructions}\nPregunta del usuario (en castellano): ${prompt}`;

      const result = await this.model.generateContent(finalPrompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error: any) {
      console.error('Error al generar texto con Gemini:', error);
      // Fallback to basic generation without context
      try {
        const fallbackResult = await this.generateText(prompt);
        return fallbackResult + '\n\n(Nota: Esta respuesta se generó sin el contexto completo debido a un error técnico)';
      } catch (fallbackError: any) {
        return `Error de Gemini: ${error.message || error}`;
      }
    }
  }

  async generateText(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Error al generar texto con Gemini:', error);
      throw error;
    }
  }

  // Opcional: Para mantener una conversación
  async startNewChat(): Promise<void> {
    this.chat = this.model.startChat({
      history: [], // Puedes cargar un historial previo aquí
      generationConfig: {
        maxOutputTokens: 100, // Ajusta según tus necesidades
      },
    });
  }

  async sendMessageToChat(message: string): Promise<string> {
    if (!this.chat) {
      await this.startNewChat(); // Inicia un nuevo chat si no hay uno activo
    }
    try {
      const result = await this.chat!.sendMessage(message);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Error al enviar mensaje al chat de Gemini:', error);
      throw error;
    }
  }
}
