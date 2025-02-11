import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigembacalhauPage } from './origembacalhau.page';

const routes: Routes = [
  {
    path: '',
    component: OrigembacalhauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigembacalhauPageRoutingModule {}
