import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChevalPage } from '../cheval/cheval';

import * as $ from 'jquery';
/*
  Generated class for the Palmares page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-palmares',
  templateUrl: 'palmares.html'
})
export class PalmaresPage {
   items = [
    'Cheval',
    'Etalon',
    'jokey'
  ];
  pushPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.navCtrl.setRoot(PalmaresPage)
   this.pushPage =ChevalPage ;
  }
   nextpage(){
    this.navCtrl.push(ChevalPage);
  }

   itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PalmaresPage');
  }
  changebtn(){
 
      if ($(".b1").css(' background-color' ,'#fe3'))
        {
         
          $(".btn-group2").css('display','block') ;

        }
    
  
  }

}
