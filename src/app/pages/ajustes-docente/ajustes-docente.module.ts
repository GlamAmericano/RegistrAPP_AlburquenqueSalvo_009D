import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesDocentePageRoutingModule } from './ajustes-docente-routing.module';

import { AjustesDocentePage } from './ajustes-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesDocentePageRoutingModule
  ],
  declarations: [AjustesDocentePage]
})
export class AjustesDocentePageModule {}
