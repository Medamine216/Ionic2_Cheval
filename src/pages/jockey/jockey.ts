import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {DetailJockeyPage} from '../detail-jockey/detail-jockey';
/*
  Generated class for the Jockey page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-jockey',
  templateUrl: 'jockey.html'
})
export class JockeyPage {
  public members ;
  searchMembers ;

  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {

      this.getJockey();
      this.initializeItems();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JockeyPage');
  }
  View(j)
{
    this.navCtrl.push(DetailJockeyPage,{j:j});
}

    getJockey() {
    return this.data.getJockey()
      .subscribe(
      data => {
        this.members = data.jockey ;
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
        return (member.Jockey.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
