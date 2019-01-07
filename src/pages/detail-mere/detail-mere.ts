import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import {ViewChevalPage}  from '../view-cheval/view-cheval';
/*
  Generated class for the DetailMere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-mere',
  templateUrl: 'detail-mere.html'
})
export class DetailMerePage {
    mere ;
    members ;
    meres : string="Production";
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
      this.mere = navParams.data.m ;
      this.getProdMere() ;
  }


  getProdMere() {
    return this.data.viewEtalon(this.mere[0] ,this.mere[1],"mere")
      .subscribe(
      data => {
        this.members = data.etalon;
           console.log(this.members);
      },
      err => console.log(err)
      );
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMerePage');
  }
View(member)
{
    this.navCtrl.push(ViewChevalPage,{member:member});
}
    filterDataAuto(data) {
    return data.filter((r) => {
      return r.CourseHasCheval.rang ==1;
      
    });
  }


  reduceDataAuto(ModifiedData) {
    let sum
    if (ModifiedData.length == 1) {
      sum = Number(ModifiedData["0"].CourseHasCheval.part_propritaire);
    } else {
      sum = ModifiedData.reduce((previous, current) => {
        let prevResult = Number(previous) ? previous : previous.CourseHasCheval.part_propritaire;
        return Number(prevResult) + Number(current.CourseHasCheval.part_propritaire);
      });
    }
    return sum;
  } 

}
