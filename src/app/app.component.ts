import { Component, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  logged: string;
  isMobile: boolean;
  isAdmin: boolean = false; // TODO: Implement logic to check if the user is an admin
  showTabs: boolean;

  constructor(private platform: Platform) {
    this.initializeApp();
    this.checkPlatform();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.isMobile = this.platform.is('mobile');
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkPlatform();
  }

  private checkPlatform() {
    const isApp = this.platform.is('hybrid');
    const isMobileWeb = this.platform.width() < 768 && !isApp;
    this.showTabs = isApp || isMobileWeb;
  }
}
