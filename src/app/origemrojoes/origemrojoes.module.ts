import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemrojoesPageRoutingModule } from './origemrojoes-routing.module';

import { OrigemrojoesPage } from './origemrojoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrigemrojoesPageRoutingModule
  ],
  declarations: [OrigemrojoesPage]
})
export class OrigemrojoesPageModule {}
