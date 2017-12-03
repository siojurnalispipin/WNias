import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetunjukPage } from '../petunjuk/petunjuk';

@IonicPage()
@Component({
  selector: 'page-konfigurasi',
  templateUrl: 'konfigurasi.html',
})
export class KonfigurasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfigurasiPage');
  }

  petunjuk(){
    this.navCtrl.push(PetunjukPage);
  }

}
