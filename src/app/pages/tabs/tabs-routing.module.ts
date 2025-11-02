import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'index',
        loadChildren: () => import('../../index/index.module').then(m => m.IndexPageModule)
      },
      {
        path: 'consult',
        loadChildren: () => import('../consult/consult.module').then(m => m.ConsultPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'new-entry/:id',
        loadChildren: () => import('../new-entry/new-entry.module').then( m => m.NewEntryPageModule)
      },
      {
        path: 'gemini',
        loadChildren: () => import('../gemini/gemini.module').then( m => m.GeminiPageModule)
      },
      {
        path: 'assistant',
        loadChildren: () => import('../assistant/assistant.module').then( m => m.AssistantPageModule)
      },
      {
        path: 'accesibilidad',
        loadChildren: () => import('../accesibilidad/accesibilidad.module').then( m => m.AccesibilidadPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/index',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
