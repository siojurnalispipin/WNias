import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

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
import { KategoriwisataPage } from '../pages/kategoriwisata/kategoriwisata';
import { ItemApiProvider } from '../providers/item-api/item-api';
import { CariwisataPage } from '../pages/cariwisata/cariwisata';
import { DaftarwisataPage } from '../pages/daftarwisata/daftarwisata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PetunjukPage,
    KonfigurasiPage,
    DetailwisataPage,
    MulaiwisataPage,
    KategoriwisataPage,
    CariwisataPage,
    DaftarwisataPage

  ],
  imports: [


  HttpModule,
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
    MulaiwisataPage,
    KategoriwisataPage,
    CariwisataPage,
    DaftarwisataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemApiProvider
  ]
})
export class AppModule {}
