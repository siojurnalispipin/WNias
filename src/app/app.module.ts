import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { PetunjukPage } from '../pages/petunjuk/petunjuk';
import { KonfigurasiPage } from '../pages/konfigurasi/konfigurasi';
import { DetailwisataPage } from '../pages/detailwisata/detailwisata';
import { MulaiwisataPage } from '../pages/mulaiwisata/mulaiwisata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PetunjukPage,
    KonfigurasiPage,
    DetailwisataPage,
    MulaiwisataPage

  ],
  imports: [

BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PetunjukPage,
    KonfigurasiPage,
    DetailwisataPage,
    MulaiwisataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
