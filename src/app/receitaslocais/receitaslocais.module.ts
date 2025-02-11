import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaslocaisPageRoutingModule } from './receitaslocais-routing.module';

import { ReceitaslocaisPage } from './receitaslocais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaslocaisPageRoutingModule
  ],
  declarations: [ReceitaslocaisPage]
})
export class ReceitaslocaisPageModule {}
