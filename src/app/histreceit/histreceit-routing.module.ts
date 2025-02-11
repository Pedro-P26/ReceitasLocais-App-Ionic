import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistreceitPage } from './histreceit.page';

const routes: Routes = [
  {
    path: '',
    component: HistreceitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistreceitPageRoutingModule {}
