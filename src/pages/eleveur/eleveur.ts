import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {DetailEleveurPage} from '../detail-eleveur/detail-eleveur';

/*
  Generated class for the Eleveur page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eleveur',
  templateUrl: 'eleveur.html'
})
export class EleveurPage {

 public members ;
  searchMembers ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider ) {
      this.getEleveur();
      this.initializeItems() ; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EleveurPage');
  }

    View(el)
{
    this.navCtrl.push(DetailEleveurPage,{en:el});
}

getEleveur() {
    return this.data.getEleveurs()
      .subscribe(
      data => {
        this.members = data.eleveurs ;
        console.log(this.members);
        this.searchOperation() ;
      },
      err => console.log(err)

      );

  }
     searchOperation(){
  this.searchMembers = this.members ;
}

  initializeItems() {

    //this.members = this.members;
    this.searchOperation();
  }
    getItems(ev :any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchMembers = this.searchMembers.filter((member) => {
        return (member.Eleveur.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
