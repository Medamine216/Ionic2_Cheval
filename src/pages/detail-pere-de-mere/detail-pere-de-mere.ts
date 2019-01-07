import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewChevalPage}  from '../view-cheval/view-cheval';
import { ServiceProvider } from '../../providers/service-provider';
/*
  Generated class for the DetailPereDeMere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-pere-de-mere',
  templateUrl: 'detail-pere-de-mere.html'
})
export class DetailPereDeMerePage {
  public Course_Pere_Mere ;
  public members ;
  pere : string ="Production" ;

  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
      this.Course_Pere_Mere = navParams.data.p ;
      this.getProductionPereDeMere();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPereDeMerePage');
  }
View(member)
{
    this.navCtrl.push(ViewChevalPage,{member:member});
}

    getProductionPereDeMere() {
    return this.data.viewEtalon(this.Course_Pere_Mere[0] ,this.Course_Pere_Mere[1],"pere_mere")
      .subscribe(
      data => {
        this.members = data.etalon;
         
          JSON.parse(JSON.stringify(this.members));
           console.log(this.members);
      },
      err => console.log(err)
      

      );

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
