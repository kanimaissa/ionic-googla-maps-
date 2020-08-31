import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps} from '@ionic-native/google-maps';
import {HttpClientModule} from '@angular/common/http';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule , 
    HttpClientModule],

  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
