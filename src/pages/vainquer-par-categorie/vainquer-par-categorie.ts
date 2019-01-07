import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
/*
  Generated class for the VainquerParCategorie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vainquer-par-categorie',
  templateUrl: 'vainquer-par-categorie.html'
})
export class VainquerParCategoriePage {
  public vainquer ; type ;
  public members ;
  public segment : string ="Vainqueur" ;

  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
    this.vainquer = navParams.data.vainquerCategr ;
    this.type = this.vainquer.chevaux ;
    this. getVainqueurParCategorie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VainquerParCategoriePage');
    console.log(this.type);
  }

  getVainqueurParCategorie(){
    return this.data.getVainqueurCategorie(this.vainquer.year,this.vainquer.categr)
    .subscribe(
      data =>{
        this.members = data.course ;
        console.log(this.members)
      },
      err => console.log(err)
    );
  }

}
