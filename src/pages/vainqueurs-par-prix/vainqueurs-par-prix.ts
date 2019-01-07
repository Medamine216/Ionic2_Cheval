import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the VainqueursParPrix page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-vainqueurs-par-prix',
  templateUrl: 'vainqueurs-par-prix.html'
})
export class VainqueursParPrixPage {
  public members ;
  public vainqueur ;
  public segment : string ="Vainqueur" ;

  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
      this.vainqueur = navParams.data.vp ;
      this.getVainquerParPrix()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VainqueursParPrixPage');
    console.log(this.vainqueur);
  }
   getVainquerParPrix() {
    return this.data.getVainqueurPrix(this.vainqueur.Course.nom_du_prix)
      .subscribe(
      data => {
        this.members = data;
           console.log(this.members);
      },
      err => console.log(err)
      );

   }
}
