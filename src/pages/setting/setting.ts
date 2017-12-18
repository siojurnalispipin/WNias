import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';



/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['Indonesia', 'English'];
  paymentMethods = ['Gunungsitoli', 'Teluk Dalam'];
  currencies = ['Jl. Pelud Bhinaka', 'Jl. Samudra raya', 'Jl. Bogodota'];

  user = {
    name: 'Sio Jurnalis Pipin',
    imageUrl: 'assets/imgs/start/ica-slidebox-img-1.png'
  };


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  logOut() {
    const alert = this.alertCtrl.create({
      title: 'Keluar Aplikasi?',
      message: 'Apakah anda yakin ingin keluar?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });

    alert.present();
  }


}
