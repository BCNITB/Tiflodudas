import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendSolionicPageRoutingModule } from './send-solionic-routing.module';

import { SendSolionicPage } from './send-solionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendSolionicPageRoutingModule
  ],
  declarations: [SendSolionicPage]
})
export class SendSolionicPageModule {}
