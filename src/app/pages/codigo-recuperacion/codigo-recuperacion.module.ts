import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoRecuperacionPageRoutingModule } from './codigo-recuperacion-routing.module';

import { CodigoRecuperacionPage } from './codigo-recuperacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoRecuperacionPageRoutingModule
  ],
  declarations: [CodigoRecuperacionPage]
})
export class CodigoRecuperacionPageModule {}
