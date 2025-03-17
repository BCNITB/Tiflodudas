import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {


  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const API_KEY = 'AIzaSyCCbZdyp0b2kvnPqUcBHll1b1zfQ_AMlkg';
    this.genAI = new GoogleGenerativeAI(API_KEY);
    this.model = this.genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
    //this.model = this.genAI.getGenerativeModel({ model: 'text-to-text' });
   }

   async generateContent(prompt: string) {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }

    /*async run(prompt: string) {
      // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
      const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    
      const prompt = "Write a story about a magic backpack."
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      return text;
    }*/
}
