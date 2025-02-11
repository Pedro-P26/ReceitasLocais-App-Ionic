import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigemrojoesPage } from './origemrojoes.page';

const routes: Routes = [
  {
    path: '',
    component: OrigemrojoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigemrojoesPageRoutingModule {}
