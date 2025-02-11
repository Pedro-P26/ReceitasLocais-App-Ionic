import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigemtortaPage } from './origemtorta.page';

const routes: Routes = [
  {
    path: '',
    component: OrigemtortaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigemtortaPageRoutingModule {}
