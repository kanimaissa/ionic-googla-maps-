import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondePage } from './seconde.page';

const routes: Routes = [
  {
    path: '',
    component: SecondePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondePageRoutingModule {}
