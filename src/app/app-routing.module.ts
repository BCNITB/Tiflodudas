import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-entry',
    loadChildren: () => import('./pages/new-entry/new-entry.module').then( m => m.NewEntryPageModule), ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'form-modal',
    loadChildren: () => import('./modals/form-modal/form-modal.module').then( m => m.FormModalPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
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
    path: 'send-sol',
    loadChildren: () => import('./modals/send-sol/send-sol.module').then( m => m.SendSolPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
