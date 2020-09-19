import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { HomePage } from './home/home.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

 
routepage:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.routepage=HomePage;
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //function to get token
      /*this.fcm.getToken().then(token => {
        console.log('token:',token);
        // send token to the server
      });


      //function to notify
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });*/
   
    });
  }
 

}
