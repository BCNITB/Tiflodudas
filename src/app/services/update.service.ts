import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private readonly GITHUB_REPO = 'BCNITB/Tiflodudas';
  private readonly GITHUB_API_URL = `https://api.github.com/repos/${this.GITHUB_REPO}/releases/latest`;

  constructor(private http: HttpClient, private platform: Platform) { }

  async getCurrentAppVersion(): Promise<string> {
    if (this.platform.is('hybrid')) {
      const info = await App.getInfo();
      return info.version;
    } else {
      // For web, you might read from package.json or a custom config file
      // For simplicity, let's return a placeholder or a known web version
      return '1.0.0'; // Placeholder for web version
    }
  }

  checkForUpdates(): Promise<{ newVersion: string; downloadUrl: string; } | null> {
    if (!this.platform.is('hybrid')) {
      return Promise.resolve(null); // Only check for updates on hybrid platforms
    }

    return new Promise((resolve, reject) => {
      this.http.get<any>(this.GITHUB_API_URL).subscribe({
        next: async (data) => {
          const latestVersion = data.tag_name.replace(/^v/, ''); // Remove 'v' prefix if present
          const currentVersion = await this.getCurrentAppVersion();

          if (this.compareVersions(latestVersion, currentVersion) > 0) {
            resolve({ newVersion: latestVersion, downloadUrl: data.html_url });
          } else {
            resolve(null);
          }
        },
        error: (err) => {
          console.error('Error checking for updates:', err);
          resolve(null); // Resolve with null on error to not block the app
        }
      });
    });
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
