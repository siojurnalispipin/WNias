import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemApiProvider } from '../../providers/item-api/item-api';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-kategoriwisata',
  templateUrl: 'kategoriwisata.html',
  providers: [Http]
})
export class KategoriwisataPage {
  items: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemApiProvider: ItemApiProvider
  ) {
  }

  ionViewDidLoad() {
    this.itemApiProvider.getItems().then(data => 
      this.items = data);
    }
  
    CategoryTapped($event, category){
      this.navCtrl.push(HomePage, {
        category : 'Fantasticness'
      });
    }
  
    CategoryTapped2($event, category){
      this.navCtrl.push(HomePage, {
        category : 'Short'
      });
    }
  
    CategoryTapped3($event, category){
      this.navCtrl.push(HomePage, {
        category : 'Booperness'
      });
    }

}
