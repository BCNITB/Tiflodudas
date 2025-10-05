import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { UpdateService } from '../../services/update.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  isApp: boolean = false;
  isMobile: boolean = false;
  private readonly GITHUB_REPO = 'BCNITB/Tiflodudas';
  private readonly GITHUB_API_URL = `https://api.github.com/repos/${this.GITHUB_REPO}/releases/latest`;

  constructor(
    private platform: Platform,
    private updateService: UpdateService,
    private alertController: AlertController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.isApp = this.platform.is('hybrid');
    this.isMobile = this.platform.is('mobile');
  }

  async checkVersion() {
    this.http.get<any>(this.GITHUB_API_URL).subscribe({
      next: async (data) => {
        const latestVersion = data.tag_name.replace(/^v/, ''); // Remove 'v' prefix if present
        const currentVersion = await this.updateService.getCurrentAppVersion();

        if (this.compareVersions(latestVersion, currentVersion) > 0) {
          this.presentUpdateAlert(latestVersion, data.html_url);
        } else {
          this.presentUpToDateAlert();
        }
      },
      error: (err) => {
        console.error('Error checking for updates:', err);
        this.presentErrorAlert();
      }
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

  async presentUpToDateAlert() {
    const alert = await this.alertController.create({
      header: 'Actualizado',
      message: 'Tienes la última versión de la aplicación instalada.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudo comprobar si hay actualizaciones. Inténtalo de nuevo más tarde.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  private compareVersions(v1: string, v2: string): number {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
      const p1 = parts1[i] || 0;
      const p2 = parts2[i] || 0;

      if (p1 > p2) return 1;
      if (p1 < p2) return -1;
    }
    return 0;
  }
}
