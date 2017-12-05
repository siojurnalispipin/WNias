import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemApiProvider } from '../../providers/item-api/item-api';
import { Http } from '@angular/http';

/**
 * Generated class for the IsiwisataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-isiwisata',
  templateUrl: 'isiwisata.html',
})
export class IsiwisataPage {
  item : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemApiProvider: ItemApiProvider) 
    {
      this.item = this.navParams.data;
      console.log(this.item);
    }
  

 

}
