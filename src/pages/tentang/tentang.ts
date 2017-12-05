import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TentangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tentang',
  templateUrl: 'tentang.html',
})
export class TentangPage {
  user = {
    name: 'Wisanis',
    profileImage: 'assets/imgs/wisata/nias.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Aplikasi Pariwisata',
    location: 'Nias, Sumatera Utara',
    description: 'Wisanis adalah aplikasi yang fokus memberikan informasi wisata di Nias, lokasi, akomodasi hingga perencanaan perjalanan wisata.',
    address: 'Jl. Pelud binaka No. 109, Ononamolo I Lot, Gunungsitoli - Nias',
    phone: '0822 7643 8906',
    email: 'siojurnalispipin@hotmail.com',
    whatsapp: '0822 7643 8906',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TentangPage');
  }

}
