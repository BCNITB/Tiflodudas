import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendSolutionPageRoutingModule } from './send-solution-routing.module';

import { SendSolutionPage } from './send-solution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SendSolutionPageRoutingModule
  ],
  declarations: [SendSolutionPage]
})
export class SendSolutionPageModule {}
