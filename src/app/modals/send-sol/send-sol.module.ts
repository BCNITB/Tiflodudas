import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendSolPageRoutingModule } from './send-sol-routing.module';

import { SendSolPage } from './send-sol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendSolPageRoutingModule
  ],
  declarations: [SendSolPage]
})
export class SendSolPageModule {}
