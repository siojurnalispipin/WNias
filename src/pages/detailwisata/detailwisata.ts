import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MulaiwisataPage } from '../mulaiwisata/mulaiwisata';
/**
 * Generated class for the DetailwisataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailwisata',
  templateUrl: 'detailwisata.html',
})
export class DetailwisataPage {
  
  estateProperty = {
    name: 'Estimasi Biaya wisata',
    description: `Pantai soreke Nias adalah salah satu object wisata paling sering dikunjungi oleh wisatawan asing. Pantai sorake terletak di barat pulau Nias, kabupaten Nias barat. Daerah ini memiliki budaya tarian moyo untuk menyambut wisatawan yang mengunjungi tempat wisata ini`,
    price: '850000',
    image: 'assets/imgs/wisata/w1.jpg',
    style: 'Terdapat rumah',
    size: '33\' Nias Utara',
    features: [
      {
        icon: 'heart',
        title: 'Sukai'
      },
      {
        icon: 'bookmark',
        title: 'Simpan wisata'
      },
      {
        icon: 'chatboxes',
        title: 'Ulasan'
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailwisataPage');
  }

  gotoMulaiwisata(){
    this.navCtrl.push(MulaiwisataPage);
  }

}
