import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'form-modal',
    loadChildren: () => import('./modals/form-modal/form-modal.module').then( m => m.FormModalPageModule)
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
    path: 'send-solution',
    loadChildren: () => import('./modals/send-solution/send-solution.module').then( m => m.SendSolutionPageModule)
  },

  {
    path: 'contact-modal',
    loadChildren: () => import('./modals/contact-modal/contact-modal.module').then( m => m.ContactModalPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
