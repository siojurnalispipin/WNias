import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DetailwisataPage } from '../detailwisata/detailwisata';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuIsHidden: boolean = false;
  estateProperty = {
    image: 'assets/img/card/advance-card-map-paris.png'
  }
  posts = [];

  //untuk statistik data
  user = {
    followers: 456,
    following: 1052,
    tweets: 35
  };

  constructor(public navCtrl: NavController,
  public viewController: ViewController) {

  }
  ionViewWillEnter() {
    // Part 1:
    this.viewController.showBackButton(false);
  }
  ionViewDidLoad() {
    this.posts = [
      {
        description: 'Pantai Sorake Nias',
        image: 'assets/imgs/wisata/w1.jpg'
      },
      {
        description: 'Pantai Lagundri',
        image: 'assets/imgs/wisata/w2.jpg'
      },
      {
        description: 'Pantai Gawu Soyo',
        image: 'assets/imgs/wisata/w3.jpg'
      },
      {
        description: 'Budaya tarian Nias',
        image: 'assets/imgs/wisata/w4.jpg'
      },
      {
        description: 'Lompat batu Nias',
        image: 'assets/imgs/wisata/w5.jpg'
      },
      {
        description: 'Wisata Tebing Putih Nias',
        image: 'assets/imgs/wisata/w6.jpg'
      }
    ];
  }

  gotoDetailwisata(){
    this.navCtrl.push(DetailwisataPage);
  }
  doClick(){
    this.navCtrl.push(ProfilPage);
  }

}
