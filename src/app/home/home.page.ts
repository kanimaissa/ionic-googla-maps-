import { Component , OnInit ,ViewChild, ElementRef} from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
//import { GoogleMap,GoogleMaps ,GoogleMapOptions,Environment,GoogleMapsEvent,Marker} from "@ionic-native/google-maps";
import { Geolocation ,GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { Router, NavigationExtras } from '@angular/router';
import {  NavController, NavParams ,AlertController} from '@ionic/angular';
import{AgenceService}from'./../services/agence.service';
import { from } from 'rxjs';
import { Agence } from '../agence';
import { PopoverController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  MyLocation,
  LocationService,
} from '@ionic-native/google-maps';

declare var google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
 
  /*
  ngsOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
     //this.platform.ready();
    //this.loadMap();
    //this.getLocation();
   // this.placeMarker();
     //this.loadAgences(this.router,this.navCtrl);
  }
  ngAfterViewInit() {
    this. platform.ready().then(() => {
      this.loadMap() 
    });
  }


  addMarker(){
    let markerMap = {
      'url':'../../assets/icon/marker_noir.svg',
   }
    let marker = new google.maps.Marker({
     
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng( this.latitude,this.longitude),
      icon: {
      scaledSize: new google.maps.Size(48, 48),
      url:markerMap
      }
    });

    this.addInfoWindow(marker, "");
    let content = '<div class="mapPopover"></div>';         
   
    
   
  }
/*load map card
  laoadMap() {
    
   Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCMvyFMHl9C_ZK-Pvt-thAT3UTDxzRKr1k',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCMvyFMHl9C_ZK-Pvt-thAT3UTDxzRKr1k',
      GOOGLE_MAPS_ANDROID_API_KEY :'AIzaSyCMvyFMHl9C_ZK-Pvt-thAT3UTDxzRKr1k' ,
      GOOGLE_MAPS_IOS_API_KEY :'AIzaSyCMvyFMHl9C_ZK-Pvt-thAT3UTDxzRKr1k'
    });

   
    this.map = GoogleMaps.create('map_canvas',{
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 8,
        tilt: 30
      }
    });
    console.log('ca marche');
  }


 async placeMarker() {
   
   
    this.map.clear();
    this.agenceservice.getAgenceAutour_de_moi(this.lat,this.lng).subscribe(res =>{
      this.data=res.agences;

      for(var i=0;i<this.data.length;i++)
      {
        var agences=this.data[i];
        console.log(agences);
        const num_agence=agences["num_agence"];
        const langitude=agences["gps_x"];
        const latitude=agences["gps_y"];
        const encombrement=agences["encombrement"];
     
    const marker: Marker = this.map.addMarkerSync({
      title:"<b style='color='red'> "+agences.nom_agence+"</b>",
       icon:'blue',
       animation: 'DROP',
       snippet: "encombrement"+agences.encombrement+"</br>"+"status"+agences.statut+"</br>"+"<ion-button style='height:20px ; width: 50px;font-size:10px;'>Details</ion-button>",
       position: {
        lat:agences["gps_x"],
        lng: agences["gps_y"]},
       
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
     
    });
    
  }
  
}) 
 }

 addInfoWindow(marker, content){
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', (event) => {
  
  });
 
}
*/
maps:GoogleMap;
map: any;
mapOptions:any;
trafficEnabled = false;
transitEnabled = false;
bicycleEnabled = false;
markers = [];
places = [];
trafficLayer = new google.maps.TrafficLayer();
transitLayer = new google.maps.TransitLayer();
bicycleLayer = new google.maps.BicyclingLayer();
myLocation: any;
infoWindow: any;
isInfoWindowShown: boolean = false;
log;
log2;
constructor(private navCtrl: NavController, private platform: Platform, private geolocation: Geolocation) {
}

ngOnInit() {
  this.platform.ready().then(() => {
    this.places = [];
    this.initMap();
    
});
}
ionViewDidLoad() {
  this.platform.ready().then(() => {
    this.places = [];
    this.initMap();
   
});
}
ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.places = [];
      this.initMap();
      
  });
}
initMap() {
  LocationService.getMyLocation({enableHighAccuracy: true}).then((location: MyLocation) => {
  console.log("init",location.latLng);
 console.log( "init",location.latLng.lat);
 console.log("init", location.latLng.lng);
 console.log(location);
 this.log=location.latLng.lat;
 this.log2=location.latLng.lng;
  }).catch((error: any) => {
    // Can not get location, permission refused, and so on...
    console.log(error);
  });
}







// github code https://github.com/TopStar51/Ionic4-Google_Map_API-AlertController
  
}
