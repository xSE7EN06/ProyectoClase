import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatatimePageRoutingModule } from './datatime-routing.module';

import { DatatimePage } from './datatime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatatimePageRoutingModule
  ],
  declarations: [DatatimePage]
})
export class DatatimePageModule {}
