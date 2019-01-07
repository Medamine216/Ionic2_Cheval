import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {VainqueursParPrixPage} from '../vainqueurs-par-prix/vainqueurs-par-prix';
import { LoadingController } from 'ionic-angular';
/*
  Generated class for the ListePrix page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liste-prix',
  templateUrl: 'liste-prix.html'
})
export class ListePrixPage {
public prix ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider , public loadingCtrl: LoadingController) {
    this.getListPrix();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListePrixPage');
  }
     presentLoading() {
    this.loadingCtrl.create({
      content: "Loading..",
      duration: 3000,
        dismissOnPageChange: true
    }).present();
  }
   getListPrix() {

    return this.data.getListePrix()
    .subscribe(
          data => {
            
              this.prix = data ;
          
            console.log(this.prix);
          },
        err => {
          console.log(err);
        }
    );
  }
 View(p)
{
    this.navCtrl.push(VainqueursParPrixPage,{vp:p});
}

}
