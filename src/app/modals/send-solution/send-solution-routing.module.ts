import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendSolutionPage } from './send-solution.page';

const routes: Routes = [
  {
    path: '',
    component: SendSolutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendSolutionPageRoutingModule {}
