import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
/*
  Generated class for the EtalonCls page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-etalon-cls',
  templateUrl: 'etalon-cls.html'
})
export class EtalonClsPage {
  public members ; etalon;
  public segment : string ="Classement" ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {

    this.etalon = navParams.data.la ;
     this.getClassement();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtalonClsPage');
    console.log ( this.etalon ) ;
  }
   getClassement() {
    return this.data.getClassementEtalon(this.etalon[0].annee)
      .subscribe(
      data => {
        this.members = data;
          console.log("members ", this.members);
      },
      err => console.log(err)
      );
}
}
