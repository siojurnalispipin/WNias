import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, Slides ,IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-6.jpg';

  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public AlertController: AlertController,
    public App: App

  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin(){
    this.slider.slideTo(1);
  }

  goToSignup(){
    this.slider.slideTo(2);
  }

  slideNext(){
    this.innerSlider.slideNext();
  }

  slidePrevious(){
    this.innerSlider.slidePrev();
  }

  presetLoading(message){
    const loading = this.loadingController.create({
      duration:500
    });

    loading.onDidDismiss(()=>{
      const alert = this.AlertController.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });
    loading.present();
  }

  login(){
    this.presetLoading('Masuk');
  }

  signup(){
    this.presetLoading('Terimakasih telah mendaftar ');
  }

  resetPassword(){
    this.presetLoading('Sebuah pesan reset password telah terkirim');
  }

}
