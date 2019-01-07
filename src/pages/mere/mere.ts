import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {DetailMerePage} from '../detail-mere/detail-mere';
/*
  Generated class for the Mere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mere',
  templateUrl: 'mere.html'
})
export class MerePage {
  mere ;
  meres ;
  searchMembers;

  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {

      this.getDataMere();
      this.initializeItems();
  }

    getDataMere() {
        this.meres=[];
    return this.data.getMere().subscribe(
      data => {
        for (let key in data.Mere) {
          this.mere = data.Mere[key].split('##');
          this.meres.push(this.mere);
        }
        console.log(this.meres);
      },
      err => {
        console.log(err);
      }
    );
  }
      View(m)
{
    this.navCtrl.push(DetailMerePage,{m:m});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MerePage');
  }


  //Recherche 
   searchOperation(){
  this.searchMembers = this.meres ;
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
