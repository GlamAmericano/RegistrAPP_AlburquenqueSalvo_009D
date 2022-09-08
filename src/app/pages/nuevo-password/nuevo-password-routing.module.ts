import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPasswordPage } from './nuevo-password.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPasswordPageRoutingModule {}
