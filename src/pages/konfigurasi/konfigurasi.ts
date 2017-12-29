import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { PetunjukPage } from '../petunjuk/petunjuk';
import { HomePage } from '../home/home';

//untuk authentikasi
import { AngularFireAuth } from 'angularfire2/auth';

declare var google;
@IonicPage()
@Component({
  selector: 'page-konfigurasi',
  templateUrl: 'konfigurasi.html',
})
export class KonfigurasiPage {

  //untuk maps
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  //end maps

  public backgroundImage = 'assets/img/background/background-6.jpg';
  cards = [
    {
      imageUrl: 'assets/img/card/advance-card-map-paris.png',
      name: 'Madison Map',
      ETA: '18 min',
      distance: 2.6,
      places: [
        {
          name: 'Museum of Football',
          address: '11 N. Way St, Madison, WI 53703',
          icon: 'football'
        }
      ]
    }
  ];

  estateProperty = {
    image: 'assets/img/card/advance-card-map-paris.png',
  }

  constructor(
    private toast : ToastController,
    private afAuth : AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(
      data => {
        if(data && data.email && data.uid){
          this.toast.create({
            message: 'Selamat Datang',
            duration: 3000
          }).present();
        }
        else{
          this.toast.create({
            message: 'Data User tidak ditemukan',
            duration: 3000
          }).present();
        }
      })
    
    this.initMap();
  }

  petunjuk(){
    this.navCtrl.push(PetunjukPage);
  }


  //ini untuk card map
  placeTapped(place) {
    alert(place.name + ' was tapped.');
  }

  getDirections(card) {
    alert('Getting directions to ' + card.name);
  }

  seeInMap(card) {
    alert('Seeing ' + card.name + ' on maps.');
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
  }

  //ini untuk maps
  //ini initMap

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 17,
      center: {
        lat: 1.284692, lng: 97.622924,
        mapTypeId: google.maps.MapTypeId.HYBRID
      }
    }
  );
    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
    
     let content = "<h4>Information!</h4>";         
    
     this.addInfoWindow(marker, content);
    
   }

   addInfoWindow(marker, content){
    
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
    
   }


}
