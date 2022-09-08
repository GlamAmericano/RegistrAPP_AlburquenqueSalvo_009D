import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPasswordPageRoutingModule } from './nuevo-password-routing.module';

import { NuevoPasswordPage } from './nuevo-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPasswordPageRoutingModule
  ],
  declarations: [NuevoPasswordPage]
})
export class NuevoPasswordPageModule {}
