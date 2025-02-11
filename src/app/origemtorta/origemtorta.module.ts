import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemtortaPageRoutingModule } from './origemtorta-routing.module';

import { OrigemtortaPage } from './origemtorta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrigemtortaPageRoutingModule
  ],
  declarations: [OrigemtortaPage]
})
export class OrigemtortaPageModule {}
