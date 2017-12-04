import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItemApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemApiProvider {

  constructor(
    public http: Http
  ){} 

  getItems(){
    return new Promise(resolve => {
      this.http.get('assets/data.json').subscribe(res => resolve(res.json()));
    })
  }

}
