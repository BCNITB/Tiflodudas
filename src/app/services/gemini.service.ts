import { Injectable } from '@angular/core';
import { GoogleGenerativeAI, GenerativeModel, ChatSession } from '@google/generative-ai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {


  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private chat: ChatSession | null = null;

  constructor() {
    //const API_KEY = 'AIzaSyCCbZdyp0b2kvnPqUcBHll1b1zfQ_AMlkg';
    //this.genAI = new GoogleGenerativeAI(API_KEY);
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-pro-002' });
    //this.model = this.genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
   }

   async generateText(prompt: string): Promise<string> {
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
