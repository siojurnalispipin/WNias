import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  // Add two members for options and current position
  options : GeolocationOptions;
  currentPos : Geoposition;

  // member variables of type Array to hold nearby places
  places : Array<any> ; 

  //add two variables
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController,
    private geolocation : Geolocation
  ) {

  }

  ionViewDidLoad(){
    this.getUserPosition();
  }

  //Add a method getUserPosition
  getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}
  //this method to create a map
  addMap(lat,long){
    
        let latLng = new google.maps.LatLng(lat, long);
    
        let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
        this.getRestaurants(latLng).then((results : Array<any>)=>{
            this.places = results;
            for(let i = 0 ;i < results.length ; i++)
            {
                this.createMarker(results[i]);
            }
        },(status)=>console.log(status));
    
        this.addMarker();
    
    }

    //this method to add a marker
    addMarker(){
      
          let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
          });
      
          let content = "<p>This is your current position !</p>";          
          let infoWindow = new google.maps.InfoWindow({
          content: content
          });
      
          google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
          });
      
      }


      //https://www.techiediaries.com/ionic-geolocation-google-maps-places-api-part-2/
      //a getRestaurants() method to get the list of nearby restaurants
      getRestaurants(latLng)
      {
          var service = new google.maps.places.PlacesService(this.map);
          let request = {
              location : latLng,
              radius : 8047 ,
              types: ["restaurant"]
          };
          return new Promise((resolve,reject)=>{
              service.nearbySearch(request,function(results,status){
                  if(status === google.maps.places.PlacesServiceStatus.OK)
                  {
                      resolve(results);    
                  }else
                  {
                      reject(status);
                  }
      
              }); 
          });
      
      }
      
      //a createMarker() method
      createMarker(place)
      {
          let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: place.geometry.location
          });   
      }   

      


}
