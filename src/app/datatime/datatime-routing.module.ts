import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatatimePage } from './datatime.page';

const routes: Routes = [
  {
    path: '',
    component: DatatimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatatimePageRoutingModule {}
