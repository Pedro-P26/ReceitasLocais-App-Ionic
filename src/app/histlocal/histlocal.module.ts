import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistlocalPageRoutingModule } from './histlocal-routing.module';

import { HistlocalPage } from './histlocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistlocalPageRoutingModule
  ],
  declarations: [HistlocalPage]
})
export class HistlocalPageModule {}
