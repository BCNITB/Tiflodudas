import { Component, OnInit } from '@angular/core';

import { GeminiService } from '../../services/gemini.service';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-gemini',
  templateUrl: './gemini.page.html',
  styleUrls: ['./gemini.page.scss'],
})
export class GeminiPage implements OnInit {

  userInput: string = '';
  geminiResponse: string = '';
  isChatActive: boolean = false;

  constructor(
    private geminiSrvc: GeminiService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async sendPrompt() {
    if (!this.userInput.trim()) {
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Pensando...',
      spinner: 'dots',
    });
    await loading.present();

    try {
      // Para generar texto simple:
      this.geminiResponse = await this.geminiSrvc.generateText(this.userInput);

      // O para usar el modo de chat:
      // if (!this.isChatActive) {
      //   await this.geminiService.startNewChat();
      //   this.isChatActive = true;
      // }
      // this.geminiResponse = await this.geminiService.sendMessageToChat(this.userInput);

      this.userInput = ''; // Limpiar la entrada
    } catch (error) {
      console.error('Error en el componente al enviar prompt:', error);
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'No se pudo obtener una respuesta de Gemini. Inténtalo de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
    } finally {
      loading.dismiss();
    }
  }
}