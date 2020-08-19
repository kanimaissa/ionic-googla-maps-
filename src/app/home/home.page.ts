import { Component , OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment,
  MarkerIcon,
  MarkerOptions
} from '@ionic-native/google-maps';
import { Router, NavigationExtras } from '@angular/router';
import {  NavController, NavParams ,AlertController} from '@ionic/angular';
import{AgenceService}from'./../services/agence.service';
import { from } from 'rxjs';
import { Agence } from '../agence';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

 lat = '36.7977987';
  lng = '10.0880051';
 

  public data:any ;

  map: GoogleMap;
  loading: any;


  constructor(public alertController: AlertController,public agenceservice:AgenceService ,public loadingCtrl: LoadingController,public toastCtrl: ToastController,private platform: Platform,private router : Router,public navCtrl: NavController) { 
    this.data=[];
  }

  ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
     this.platform.ready();
    this.loadMap();
    this.getLocation();
    this.placeMarker();
     //this.loadAgences(this.router,this.navCtrl);
  }


//load map card
  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCMvyFMHl9C_ZK-Pvt-thAT3UTDxzRKr1k',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCMvyFMHl9C_ZK-Pvt-thAT3UTDxzRKr1k'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 13,
        tilt: 30
      }
    
    });
    
  }
 async placeMarker() {
    /*this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();*/
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




  async getLocation() {
    this.map.clear();
    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
    
      console.log(JSON.stringify(location, null ,2));
    

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 13,
        tilt: 30,
       
      });

      // add a marker
     let marker: Marker = this.map.addMarkerSync({
        title: 'Ma position!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
       
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
     
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
   
    toast.present();
  }



  
}
