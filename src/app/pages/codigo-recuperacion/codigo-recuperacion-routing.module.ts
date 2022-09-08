import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoRecuperacionPage } from './codigo-recuperacion.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoRecuperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoRecuperacionPageRoutingModule {}
