import { Injectable } from '@angular/core';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { environment } from 'src/environments/environment';
import { CATEGORIES } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-pro-002' });
  }

  async getChatResponse(userQuestion: string): Promise<string> {
    const context = `Eres un asistente experto para "Tiflodudas", una aplicación con información sobre tecnologías de asistencia para personas con discapacidad visual. Tu base de conocimiento principal son los siguientes datos: ${JSON.stringify(CATEGORIES)}. Responde a la pregunta del usuario de forma clara y concisa, basándote en esta información.`;
    const fullPrompt = `${context}\n\nPregunta del usuario: "${userQuestion}"`;

    return this.generateText(fullPrompt);
  }

  private async generateText(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Error al generar texto con Gemini:', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }
}
