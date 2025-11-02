import { Component, OnInit } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.page.html',
  styleUrls: ['./assistant.page.scss'],
})
export class AssistantPage implements OnInit {

  messages: { sender: string, content: string }[] = [];
  userInput: string = '';
  isLoading: boolean = false;

  constructor(private geminiService: GeminiService) { }

  ngOnInit() {
  }

  async sendMessage() {
    if (this.userInput.trim().length === 0) {
      return;
    }

    this.messages.push({ sender: 'user', content: this.userInput });
    const prompt = this.userInput;
    this.userInput = '';
    this.isLoading = true;

    try {
      const response = await this.geminiService.generateTextWithContext(prompt);
      this.messages.push({ sender: 'bot', content: response });
    } catch (error) {
      this.messages.push({ sender: 'bot', content: 'Lo siento, ha ocurrido un error.' });
    } finally {
      this.isLoading = false;
    }
  }

}
