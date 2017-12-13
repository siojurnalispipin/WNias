import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DetailwisataPage } from '../detailwisata/detailwisata';
import { ProfilPage } from '../profil/profil';

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  menuIsHidden: boolean = false;
  estateProperty = {
    image: 'assets/img/card/advance-card-map-paris.png'
  }
  posts = [];

  //untuk statistik data
  user = {
    followers: 456,
    following: 1052,
    tweets: 35
  };

  constructor(public navCtrl: NavController,
  public viewController: ViewController) {

  }
  ionViewWillEnter() {
    // Part 1:
    
    this.viewController.showBackButton(false);
  }
  ionViewDidLoad() {
    this.posts = [
      {
        description: 'Pantai Sorake Nias',
        image: 'assets/imgs/wisata/w1.jpg'
      },
      {
        description: 'Pantai Lagundri',
        image: 'assets/imgs/wisata/w2.jpg'
      },
      {
        description: 'Pantai Gawu Soyo',
        image: 'assets/imgs/wisata/w3.jpg'
      },
      {
        description: 'Budaya tarian Nias',
        image: 'assets/imgs/wisata/w4.jpg'
      },
      {
        description: 'Lompat batu Nias',
        image: 'assets/imgs/wisata/w5.jpg'
      },
      {
        description: 'Wisata Tebing Putih Nias',
        image: 'assets/imgs/wisata/w6.jpg'
      }
    ];
    this.initMap();
  }

  gotoDetailwisata(){
    this.navCtrl.push(DetailwisataPage);
  }
  doClick(){
    this.navCtrl.push(ProfilPage);
  }

  

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
