import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications, Token, PushNotificationSchema, ActionPerformed } from '@capacitor/push-notifications';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(
    private toastCtrl: ToastController,
    private firestore: Firestore,
    private auth: Auth
  ) { }

  public initPush() {
    if (Capacitor.isNativePlatform()) {
      this.registerPush();
    }
  }

  private async registerPush() {
    try {
      await PushNotifications.requestPermissions();
      await PushNotifications.register();

      PushNotifications.addListener('registration', async (token: Token) => {
        console.log('Push registration success, token: ' + token.value);
        // Save token to Firestore
        const user = this.auth.currentUser;
        if (user) {
          const tokenRef = doc(this.firestore, `users/${user.uid}/tokens/${token.value}`);
          await setDoc(tokenRef, { token: token.value });
        }
      });

      PushNotifications.addListener('registrationError', (error: any) => {
        console.error('Error on registration: ' + JSON.stringify(error));
      });

      PushNotifications.addListener('pushNotificationReceived', async (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
        const toast = await this.toastCtrl.create({
          message: notification.title,
          duration: 3000,
          position: 'top',
          header: notification.body
        });
        await toast.present();
      });

      PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
        // Here you can add navigation logic based on notification data
      });

    } catch (e) {
      console.error('Push notification registration error', e);
    }
  }
}
