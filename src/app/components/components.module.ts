import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { AccesComponent } from './acces/acces.component';

@NgModule({
  declarations: [
    RegisterComponent,
    AccesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    AccesComponent
  ],
})
export class ComponentsModule { }
