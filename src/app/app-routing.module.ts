import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'new-entry/:id',
    loadChildren: () => import('./pages/new-entry/new-entry.module').then( m => m.NewEntryPageModule), 
  },
  {
    path: 'form-modal',
    loadChildren: () => import('./modals/form-modal/form-modal.module').then( m => m.FormModalPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'consult',
    loadChildren: () => import('./pages/consult/consult.module').then( m => m.ConsultPageModule)
  },
  {
    path: 'items-list/:id',
    loadChildren: () => import('./pages/items-list/items-list.module').then( m => m.ItemsListPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'send-solution',
    loadChildren: () => import('./modals/send-solution/send-solution.module').then( m => m.SendSolutionPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'accesibilidad',
    loadChildren: () => import('./pages/accesibilidad/accesibilidad.module').then( m => m.AccesibilidadPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact-modal',
    loadChildren: () => import('./modals/contact-modal/contact-modal.module').then( m => m.ContactModalPageModule)
  },
  {
    path: 'gemini',
    loadChildren: () => import('./pages/gemini/gemini.module').then( m => m.GeminiPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
