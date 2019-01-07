import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {DetailPereDeMerePage} from '../detail-pere-de-mere/detail-pere-de-mere'

/*
  Generated class for the PereDeMere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pere-de-mere',
  templateUrl: 'pere-de-mere.html'
})
export class PereDeMerePage {
  pere_mere ;
  PereDeMere;
  searchMembers;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {

      this.getDataPereDeMere();
      this.initializeItems();
  }

    getDataPereDeMere() {
        this.PereDeMere=[];
    return this.data.getPereDeMere().subscribe(
      data => {
        for (let key in data.PereMere) {
          this.pere_mere = data.PereMere[key].split('##');
          this.PereDeMere.push(this.pere_mere);
        }
        console.log(this.PereDeMere);
      },
      err => {
        console.log(err);
      }
    );
  }
    View(p)
{
    this.navCtrl.push(DetailPereDeMerePage,{p:p});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PereDeMerePage');
  }

  //Recherche 
   searchOperation(){
  this.searchMembers = this.PereDeMere ;
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
        return (member[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
