import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the PetunjukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-petunjuk',
  templateUrl: 'petunjuk.html',
})
export class PetunjukPage {
  showSkip = true;
  
  @ViewChild('slides') slides : Slides;
  
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,

  ) { }

  startApp() {
    this.navCtrl.push(LoginPage);
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
