import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaslocaisPage } from './receitaslocais.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaslocaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaslocaisPageRoutingModule {}
