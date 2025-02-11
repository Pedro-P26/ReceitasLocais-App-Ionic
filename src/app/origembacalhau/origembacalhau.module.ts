import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigembacalhauPageRoutingModule } from './origembacalhau-routing.module';

import { OrigembacalhauPage } from './origembacalhau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrigembacalhauPageRoutingModule
  ],
  declarations: [OrigembacalhauPage]
})
export class OrigembacalhauPageModule {}
