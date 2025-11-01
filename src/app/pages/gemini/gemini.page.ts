import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { GeminiService } from 'src/app/services/gemini.service';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-gemini',
  templateUrl: './gemini.page.html',
  styleUrls: ['./gemini.page.scss'],
})
export class GeminiPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  messages: Message[] = [];
  userInput: string = '';
  isLoading: boolean = false;

  constructor(private geminiService: GeminiService) { }

  ngOnInit() {
    this.messages.push({ sender: 'bot', text: 'Hola, soy el asistente de Tiflodudas. ¿En qué puedo ayudarte hoy?' });
  }

  async sendMessage(event: any) {
    event.preventDefault();

    if (this.userInput.trim()) {
      const userMessageText = this.userInput.trim();
      this.messages.push({ sender: 'user', text: userMessageText });
      this.userInput = '';
      this.isLoading = true;
      this.scrollToBottom();

      try {
        const botResponse = await this.geminiService.getChatResponse(userMessageText);
        this.messages.push({ sender: 'bot', text: botResponse });
      } catch (error) {
        console.error('Error al contactar con el servicio de Gemini', error);
        this.messages.push({ sender: 'bot', text: 'Lo siento, no he podido procesar tu solicitud en este momento.' });
      } finally {
        this.isLoading = false;
        this.scrollToBottom();
      }
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 100);
  }
}