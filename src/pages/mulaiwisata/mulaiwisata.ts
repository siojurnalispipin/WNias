import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the MulaiwisataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mulaiwisata',
  templateUrl: 'mulaiwisata.html',
})
export class MulaiwisataPage {
  @ViewChild('sliderThree') sliderThree: Slides;
  slides = [
    {
      title: 'Pantai sorake Nias',
      imageUrl: 'assets/imgs/wisata/w1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'Wisata Nias',
      imageUrl: 'assets/imgs/wisata/w2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Lompat batu nias',
      imageUrl: 'assets/imgs/wisata/w3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'Perjalanan wisata',
      imageUrl: 'assets/imgs/wisata/w4.jpg',
      songs: 12,
      private: true
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MulaiwisataPage');
  }
  
    ngAfterViewInit() {
      
      this.sliderThree.paginationBulletRender = (index, className) => {
        return `<span class="custom-pagination-3 bullet-icon-${index + 1} ${className}></span>`;
      };
    }

}
