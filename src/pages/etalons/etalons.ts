import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {DetailEtalonPage} from '../detail-etalon/detail-etalon'

/*
  Generated class for the Etalons page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-etalons',
  templateUrl: 'etalons.html'
})
export class EtalonsPage {
  etalon;
  etalons;
  cheval ;
  searchMembers ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ServiceProvider) {
    this.getDataEtalon();
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtalonsPage');
  }
  View(e)
{
    this.navCtrl.push(DetailEtalonPage,{e:e});
}

  getDataEtalon() {
        this.etalons=[];
    return this.data.getEtalon().subscribe(
      data => {
        for (let key in data.etalon) {
          this.etalon = data.etalon[key].split('##');
          this.etalons.push(this.etalon);
        }
        this.searchOperation();
        console.log(this.etalons);
      },
      err => {
        console.log(err);
      }
    );
  }
  
  searchOperation(){
  this.searchMembers = this.etalons ;
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