import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { GoogleMaps} from '@ionic-native/google-maps';
import { HomePageRoutingModule } from './home-routing.module';
import { MapsComponent} from'../components/maps/maps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  providers: [
    GoogleMaps
  ],
  declarations: [HomePage,MapsComponent]
})
export class HomePageModule {}
