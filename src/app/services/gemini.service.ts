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
  private manuals = ['jaws_keystrokes.txt', 'nvda_keystrokes.txt'];

  constructor(
    private itemService: ItemService,
    private http: HttpClient,
    private dataCache: DataCacheService // Inject DataCacheService
  ) {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  }

  async generateTextWithContext(prompt: string): Promise<string> {
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
          console.log(`Manual ${manual} loaded from cache.`);
          return { manual, content: content as string };
        } else {
          console.log(`Manual ${manual} not in cache, fetching from network.`);
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
      manualContents.forEach(mc => {
        if (mc.content && mc.content.toLowerCase().includes(prompt.toLowerCase())) {
          if (manualContext === '') {
            manualContext = 'Contexto de los manuales:\n';
          }
          manualContext += `Manual: ${mc.manual}\n${mc.content}\n\n`;
        }
      });


      const finalPrompt = `${manualContext}${dbContext}\nBasándote en la información proporcionada, responde a la siguiente pregunta del usuario de forma concisa y sin repetir las etiquetas de contexto (Categoría, Dispositivo, Consulta, Respuesta). Solo proporciona la respuesta. Pregunta del usuario: ${prompt}`;

      const result = await this.model.generateContent(finalPrompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Error al generar texto con Gemini:', error);
      throw error;
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
