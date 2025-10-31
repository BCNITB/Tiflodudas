import { Component, HostListener } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { ThemeService } from './services/theme.service';
import { UpdateService } from './services/update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  logged: string;
  isMobileView: boolean;
  isAdmin: boolean = false; // TODO: Implement logic to check if the user is an admin
  showTabs: boolean;
  menuCollapsed: boolean = false;

  constructor(private platform: Platform, private themeService: ThemeService, private updateService: UpdateService, private alertController: AlertController, private router: Router) {
    this.initializeApp();
    this.checkPlatform();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.shiftKey && event.key === 'I') {
      this.router.navigate(['/']);
    } else if (event.shiftKey && event.key === 'C') {
      this.router.navigate(['/tabs/consult']);
    } else if (event.shiftKey && event.key === 'B') {
      this.router.navigate(['/tabs/search']);
    } else if (event.shiftKey && event.key === 'O') {
      this.toggleMenuCollapse();
    }
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.checkPlatform();
      // Check for updates after platform is ready
      // const updateInfo = await this.updateService.checkForUpdates();
      // if (updateInfo) {
      //   this.presentUpdateAlert(updateInfo.newVersion, updateInfo.downloadUrl);
      // }
    });
  }

  async presentUpdateAlert(newVersion: string, downloadUrl: string) {
    const alert = await this.alertController.create({
      header: 'Nueva Versión Disponible',
      message: `Hay una nueva versión (${newVersion}) de la aplicación disponible. ¿Deseas descargarla ahora?`,
      buttons: [
        {
          text: 'Más Tarde',
          role: 'cancel',
          handler: () => {
            console.log('Update deferred');
          },
        },
        {
          text: 'Descargar',
          handler: () => {
            window.open(downloadUrl, '_system');
          },
        },
      ],
    });

    await alert.present();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkPlatform();
  }

  private checkPlatform() {
    this.isMobileView = this.platform.width() < 768;
    const isApp = this.platform.is('hybrid');
    const isMobileWeb = this.isMobileView && !isApp;
    this.showTabs = isApp || isMobileWeb;
  }

  toggleMenuCollapse() {
    this.menuCollapsed = !this.menuCollapsed;
  }
}
