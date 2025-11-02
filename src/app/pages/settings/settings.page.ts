import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PushNotifications, Token, PushNotificationSchema, ActionPerformed, RegistrationError } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  selectedTheme: string;
  fontMultiplier: number;
  selectedFontFamily: string;
  selectedLineHeight: number;
  selectedTextAlign: string;
  customBackgroundColor: string;
  customTextColor: string;
  contrastRatio: number = 0;

  constructor(private themeService: ThemeService, private toastController: ToastController) { }

  ngOnInit() {
    this.selectedTheme = this.themeService.getTheme();
    this.fontMultiplier = this.themeService.getFontMultiplier();
    this.selectedFontFamily = this.themeService.getFontFamily();
    this.selectedLineHeight = this.themeService.getLineHeight();
    this.selectedTextAlign = this.themeService.getTextAlign();
    this.customBackgroundColor = localStorage.getItem('customBackgroundColor') || '#FFFFFF';
    this.customTextColor = localStorage.getItem('customTextColor') || '#000000';
    this.calculateContrastRatio();
  }

  async enablePushNotifications() {
    if (Capacitor.isNativePlatform()) {
      let permStatus = await PushNotifications.requestPermissions();

      if (permStatus.receive === 'granted') {
        await PushNotifications.register();
        this.presentToast('Notificaciones push activadas.', 'success');
      } else {
        this.presentToast('Permiso de notificaciones denegado.', 'danger');
      }

      PushNotifications.addListener('registration', (token) => {
        console.log('Push registration success, token: ' + token.value);
        // TODO: Send this token to your backend server to associate with the user
      });

      PushNotifications.addListener('registrationError', (error: any) => {
        console.error('Error on registration: ' + JSON.stringify(error));
        this.presentToast('Error al registrar notificaciones.', 'danger');
      });

      PushNotifications.addListener('pushNotificationReceived', (notification) => {
        console.log('Push received: ' + JSON.stringify(notification));
        this.presentToast(`Notificación recibida: ${notification.title}`, 'primary');
      });

      PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
        // Handle notification tap
      });
    } else {
      this.presentToast('Las notificaciones push solo están disponibles en dispositivos móviles.', 'warning');
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
    });
    toast.present();
  }

  changeTheme() {
    if (this.selectedTheme === 'custom') {
      this.themeService.setTheme('custom', this.customBackgroundColor, this.customTextColor);
    } else {
      this.themeService.setTheme(this.selectedTheme);
    }
  }

  changeCustomColor() {
    localStorage.setItem('customBackgroundColor', this.customBackgroundColor);
    localStorage.setItem('customTextColor', this.customTextColor);
    this.calculateContrastRatio();
    if (this.selectedTheme === 'custom') {
      this.themeService.setTheme('custom', this.customBackgroundColor, this.customTextColor);
    }
  }

  changeFontMultiplier() {
    this.themeService.setFontMultiplier(this.fontMultiplier);
  }

  changeFontFamily() {
    this.themeService.setFontFamily(this.selectedFontFamily);
  }

  changeLineHeight() {
    this.themeService.setLineHeight(this.selectedLineHeight);
  }

  changeTextAlign() {
    this.themeService.setTextAlign(this.selectedTextAlign);
  }

  resetSettings() {
    this.themeService.resetAllSettings();
    this.selectedTheme = this.themeService.getTheme();
    this.fontMultiplier = this.themeService.getFontMultiplier();
    this.selectedFontFamily = this.themeService.getFontFamily();
    this.selectedLineHeight = this.themeService.getLineHeight();
    this.selectedTextAlign = this.themeService.getTextAlign();
    this.customBackgroundColor = localStorage.getItem('customBackgroundColor') || '#FFFFFF';
    this.customTextColor = localStorage.getItem('customTextColor') || '#000000';
    this.calculateContrastRatio();
  }

  calculateContrastRatio() {
    const bgRgb = this.hexToRgb(this.customBackgroundColor);
    const textRgb = this.hexToRgb(this.customTextColor);

    if (!bgRgb || !textRgb) {
      this.contrastRatio = 0;
      return;
    }

    const L1 = this.getLuminance(textRgb.r, textRgb.g, textRgb.b);
    const L2 = this.getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);

    this.contrastRatio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  getLuminance(r: number, g: number, b: number) {
    const a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

}