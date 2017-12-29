import { User } from './../../models/user';
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, Slides ,IonicPage, NavController } from 'ionic-angular';
import { KonfigurasiPage } from '../konfigurasi/konfigurasi';

//untuk authentication
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-6.jpg';

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public AlertController: AlertController,
    public App: App

  ) { }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

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

  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(KonfigurasiPage);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  async signup(user : User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

  resetPassword(){
    this.presetLoading('Sebuah pesan reset password telah terkirim');
  }

}
