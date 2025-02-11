import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistreceitPageRoutingModule } from './histreceit-routing.module';

import { HistreceitPage } from './histreceit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistreceitPageRoutingModule
  ],
  declarations: [HistreceitPage]
})
export class HistreceitPageModule {}
