import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendSolionicPage } from './send-solionic.page';

const routes: Routes = [
  {
    path: '',
    component: SendSolionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendSolionicPageRoutingModule {}
