import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

import { ChevalCLsPage } from '../cheval-c-ls/cheval-c-ls';
import {EtalonClsPage} from '../etalon-cls/etalon-cls';
/*
  Generated class for the ListeAnnee page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liste-annee',
  templateUrl: 'liste-annee.html'
})
export class ListeAnneePage {

  public annee ; anneEtalon ; annePere ; nom;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ServiceProvider) {
    this.getListAnnee();
    this.getlistAnneEtalon();
    this.getlistAnnePereMere() ;
    this.nom = navParams.data.nom ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeAnneePage');
    console.log (this.nom) ;
  }
    getlistAnnePereMere(){
    return this.data.getlisteannePereMere()
          .subscribe(
      data => {
        this.annePere = data;
        console.log(this.annePere);
      },
      err => {
        console.log(err);
      }
      );
  }
  getlistAnneEtalon(){
    return this.data.getlisteanneEtalon()
          .subscribe(
      data => {
        this.anneEtalon = data.annees;

        console.log(this.anneEtalon);
      },
      err => {
        console.log(err);
      }
      );
  }
  getListAnnee() {
    return this.data.getclassementCheval()
      .subscribe(
      data => {

        this.annee = data;

        console.log(this.annee);
      },
      err => {
        console.log(err);
      }
      );
  }
  View(item) {
    if (this.nom == "Cheval"){
          this.navCtrl.push(ChevalCLsPage, { la: item });
    }

else 
  if (this.nom == "Étalon") {
    this.navCtrl.push(EtalonClsPage , { la: item })
  }
  }

}
