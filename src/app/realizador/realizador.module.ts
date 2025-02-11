import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizadorPageRoutingModule } from './realizador-routing.module';

import { RealizadorPage } from './realizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizadorPageRoutingModule
  ],
  declarations: [RealizadorPage]
})
export class RealizadorPageModule {}
