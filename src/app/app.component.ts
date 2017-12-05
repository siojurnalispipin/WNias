import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Config } from 'ionic-angular/config/config';
import { PetunjukPage } from '../pages/petunjuk/petunjuk';
import { KategoriwisataPage } from '../pages/kategoriwisata/kategoriwisata';
import { CariwisataPage } from '../pages/cariwisata/cariwisata';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PetunjukPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,

    //config ini untuk menyelesaikan masalah ion-slides
    public config: Config,
    public splashScreen: SplashScreen
    ) {

    // all platforms ini untuk mengatasi ion-slides
		this.config.set( 'scrollPadding', false )
		this.config.set( 'scrollAssist', false )
		this.config.set( 'autoFocusAssist', false )
		// android
		this.config.set( 'android', 'scrollAssist', true )
		this.config.set( 'android', 'autoFocusAssist', 'delay' )
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Wisata', component: KategoriwisataPage },
      { title: 'Cari Wisata', component: CariwisataPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
