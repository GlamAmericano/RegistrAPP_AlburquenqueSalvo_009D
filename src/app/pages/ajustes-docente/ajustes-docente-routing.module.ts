import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesDocentePage } from './ajustes-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesDocentePageRoutingModule {}
