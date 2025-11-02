import { Injectable } from '@angular/core';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private messaging: Messaging) { }

  requestPermission() {
    return new Promise(async (resolve, reject) => {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const vapidKey = environment.firebase.vapidKey; // You need to add this to your environment files
        const token = await getToken(this.messaging, { vapidKey });
        console.log('User token: ', token);
        // TODO: Send this token to your server
        resolve(token);
      } else {
        reject(new Error('Permission not granted'));
      }
    });
  }

  listenForMessages() {
    onMessage(this.messaging, (payload) => {
      console.log('Message received. ', payload);
      // TODO: Display the notification to the user
    });
  }
}
