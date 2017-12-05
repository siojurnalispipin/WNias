import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemApiProvider } from '../../providers/item-api/item-api';
import { IsiwisataPage } from '../isiwisata/isiwisata';

/**
 * Generated class for the CariwisataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cariwisata',
  templateUrl: 'cariwisata.html',
  providers: [Http]
})
export class CariwisataPage {
  items: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    private itemApiProvider : ItemApiProvider
  ) {
  }
  //fungsi ini : data di ambil dari service
  //ini terjadi ketika "view loads" dari pertamakali
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Mendapatkan Berita.."
    });
    loader.present();

    this.itemApiProvider.getItems().then(data => {
      loader.dismiss();
      this.items = data;
    });
  }

  //fungsi ini akan memanggil semua yang di input pada bar pencarian
  getItems(searchbar){

    //set q sebagai nilai dari bar pencarian
    var q = searchbar.srcElement.value;

    //jika nilai kosong, tidak akan filter item
    if(!q){
      // menampilkan loader ketika pencarian di lakukan
      let loader = this.loadingController.create({
        content: "Mendapatkan berita.."
      });
      loader.present();

      // fetch the data and dismiss loader
      this.itemApiProvider.getItems().then(data => {
        loader.dismiss();
        this.items = data
      });
    }

    this.items = this.items.filter((v) => {
      if(v.title && q) {
        if(v.title.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  itemTapped($event, item){
    this.navCtrl.push(IsiwisataPage, item);
  }

}
