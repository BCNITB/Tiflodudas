import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormModalPageRoutingModule } from './form-modal-routing.module';

import { FormModalPage } from './form-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormModalPageRoutingModule
  ],
  declarations: [FormModalPage]
})
export class FormModalPageModule {}
