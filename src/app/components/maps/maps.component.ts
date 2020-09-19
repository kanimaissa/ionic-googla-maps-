import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
declare var google;
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  private options: GeolocationOptions;
  private currentPos: Geoposition;
  private userLat: any;
  private userLong: any;
  private map: any;
  //lat = "37.4219983";
  //lng = "-122.084";
  constructor(private geolocation: Geolocation, public alertController: AlertController) {
   
   }

  ngOnInit() {
    //this.loadMap();
    this.getUserPosition();
  }

  /*loadMap(){
    //TODO : get user position and focus it on the map 
    let latLng = new google.maps.LatLng(37.4219983,-122.084);
    let mapOptions = {
      center: latLng,
      zoom: 12,
      disableDefaultUI: true, 
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
*/

  ionViewDidEnter() {
   //this.getUserPosition();
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      this.userLat = pos.coords.latitude;
      this.userLong = pos.coords.longitude;
      this.addMap(pos.coords.latitude, pos.coords.longitude);
    }, (err: PositionError) => {
      console.log('error: ' + err.message);
    });
  }

  addMap(lat, long) {
    const latLng = new google.maps.LatLng(lat, long);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.addMarker();
  }

  addMarker() {
    // const userMarker = 'assets/img/custom_icon.jpg';
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      // icon: userMarker
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'My Location',
      subHeader: '',
      message: 'latitude: ' + this.userLat + '<br>Longitude: ' + this.userLong,
      buttons: ['OK']
    });

    await alert.present();
  }
}
