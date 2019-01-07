import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {VainquerParCategoriePage} from '../vainquer-par-categorie/vainquer-par-categorie';
/*
  Generated class for the ListeCategorie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liste-categorie',
  templateUrl: 'liste-categorie.html'
})
export class ListeCategoriePage {

  date : string ;
  type : string ;
  categorie : string ;

  public annee ; categ  ; 

  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
    this.getListCategorie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeCategoriePage');
  }
    getListCategorie() {

    return this.data.getlisteCategorie()
    .subscribe(
          data => {
            
              this.annee = data.annee ;
              this.categ = data.categorie ;
          
            console.log(this.annee);
          },
        err => {
          console.log(err);
        }
    );
  }
View(year,categr,chevaux)
{
    this.navCtrl.push(VainquerParCategoriePage,{vainquerCategr:{year,categr,chevaux}});
}
}
