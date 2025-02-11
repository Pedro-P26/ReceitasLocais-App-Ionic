import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistlocalPage } from './histlocal.page';

const routes: Routes = [
  {
    path: '',
    component: HistlocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistlocalPageRoutingModule {}
