import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetunjukPage } from '../petunjuk/petunjuk';

@IonicPage()
@Component({
  selector: 'page-konfigurasi',
  templateUrl: 'konfigurasi.html',
})
export class KonfigurasiPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfigurasiPage');
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

}
