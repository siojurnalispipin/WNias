import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetunjukPage } from './../petunjuk/petunjuk';
/**
 * Generated class for the KonfigurasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
