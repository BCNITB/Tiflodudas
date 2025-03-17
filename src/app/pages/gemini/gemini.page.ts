import { Component, OnInit } from '@angular/core';

import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-gemini',
  templateUrl: './gemini.page.html',
  styleUrls: ['./gemini.page.scss'],
})
export class GeminiPage implements OnInit {

  userInput: string = '';
  geminiResponse: string = '';

  constructor(private geminiSrvc: GeminiService) { }

  ngOnInit() {
  }

  async sendPrompt() {
    this.geminiResponse = await this.geminiSrvc.generateContent(this.userInput);
  }

}
