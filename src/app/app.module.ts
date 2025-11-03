import { NgModule, isDevMode } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular'; // Import IonicStorageModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore, enableIndexedDbPersistence, Firestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { PipesModule } from './pipes/pipes.module';
import { TabsPageModule } from './pages/tabs/tabs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PipesModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(), // Add IonicStorageModule here
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideFirestore(() => getFirestore()), 
    provideAuth(() => getAuth()), 
    provideMessaging(() => getMessaging()), 
    TabsPageModule, 
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(firestore: Firestore) {
    enableIndexedDbPersistence(firestore)
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          console.error('Multiple tabs open, persistence can only be enabled in one tab at a time.');
        } else if (err.code === 'unimplemented') {
          console.error('The current browser does not support all of the features required to enable persistence.');
        }
      });
  }
}
