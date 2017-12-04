import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ItemApiProvider } from '../../providers/item-api/item-api';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-daftarwisata',
  templateUrl: 'daftarwisata.html',
  providers: [Http]
})
export class DaftarwisataPage {

  items: any;
  passedCategory: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemApiProvider: ItemApiProvider,
    public loadingController: LoadingController
  ) {
    this.passedCategory = this.navParams.get('category');
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Getting items.."
    });
    loader.present();

    this.itemApiProvider.getItems().then(data => {
      loader.dismiss();
      this.items = data;
      this.items = this.items.filter(item =>
      item.category == this.passedCategory);
    });
  }

  itemTapped($event, item){
    this.navCtrl.push(HomePage, item)
  }

}
