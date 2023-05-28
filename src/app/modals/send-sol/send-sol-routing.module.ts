import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendSolPage } from './send-sol.page';

const routes: Routes = [
  {
    path: '',
    component: SendSolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendSolPageRoutingModule {}
