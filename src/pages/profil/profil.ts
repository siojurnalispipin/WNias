import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  following= false;
  openMenu= false;
  user = {
    name : 'Sio Jurnalis Pipin',
    profileImage : 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/background/background-5.jpg',
    occupation: 'Pecinta Alam',
    location : 'Medan, Indonesia',
    description: 'Perna berkunjung ke Nias untuk menikmati budaya dan kerajinan tangan asli nias',
    ipk : '30',
    semester: '23',
    matakuliah: '20'
  };

  posts = [
    {
      postImageUrl : 'assets/background/background-2.jpg',
      text: `Ini contoh status pada ion card.
             Semua hal ini masih dalam tahap pengembangan, jadi perlu beberapa waktu untuk perbaikan.`,
      date : '12 Oktober 2017',
      likes :12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/background/background-3.jpg',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/background/background-4.jpg',
      date: 'June 28, 2016',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastController : ToastController
  ) {
  }
  follow(){
    if(this.following = !this.following){
      this.presentToas("Telah diikuti")
    }
    else{
      this.presentToas("Telah dihapus")
    }
  }

  imageTapped(post){
    this.presentToas("Gambar telah diclick");
  }

  comment(post){
    this.presentToas("Komentar telah diclick");
  }

  like(post){
    this.presentToas("Liked");
  }

  presentToas(msg){
    let toas = this.toastController.create({
      message : msg,
      duration: 2000
    });
    toas.present();
  }

}
