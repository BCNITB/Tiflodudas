import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  async presentToast(msg: string, time: number){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
    });

    toast.present();
  }

  async presentLoading(msg: string){
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: msg,
    });

    await this.loading.present();
  }

  async closeLoading(){
    await this.loading.dismiss();
  }
}
