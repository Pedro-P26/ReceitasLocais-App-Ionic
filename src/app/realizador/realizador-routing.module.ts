import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizadorPage } from './realizador.page';

const routes: Routes = [
  {
    path: '',
    component: RealizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizadorPageRoutingModule {}
