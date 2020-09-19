import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondePageRoutingModule } from './seconde-routing.module';

import { SecondePage } from './seconde.page';
import { MapsComponent} from '../components/maps/maps.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondePageRoutingModule
  ],
  declarations: [SecondePage,MapsComponent]
})
export class SecondePageModule {}
