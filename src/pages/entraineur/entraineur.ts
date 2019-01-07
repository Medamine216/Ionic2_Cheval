import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {DetailEntraineurPage} from '../detail-entraineur/detail-entraineur';
/*
  Generated class for the Entraineur page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entraineur',
  templateUrl: 'entraineur.html'
})
export class EntraineurPage {
  public members ;
searchMembers ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider ) {
      this.getEntraineur();
      this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntraineurPage');
  }

    View(j)
{
    this.navCtrl.push(DetailEntraineurPage,{en:j});
}

getEntraineur() {
    return this.data.getEntraineur()
      .subscribe(
      data => {
        this.members = data.Entraineur ;
        console.log(this.members);
        this.searchOperation();
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
        return (member.Entraineur.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
