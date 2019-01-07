import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the DetailEntraineur page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-entraineur',
  templateUrl: 'detail-entraineur.html'
})
export class DetailEntraineurPage {
public entraineur ;
public members ;
public year ;
public segments : string ="Performance";
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) 
  {

      this.entraineur = navParams.data.en ;
      this.getDetailEntraineur() ;
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEntraineurPage');
     console.log(this.entraineur);
  }
  getDetailEntraineur() {
    return this.data.getCourseEntraineur(this.entraineur.Entraineur.id)
      .subscribe(
      data => {
        this.members = data.courseHasCheval;
        this.year = data.engagements ;
   
           console.log(this.members);
      },
      err => console.log(err)
      );
}
filterDataAuto(Year) {
    return this.members.filter((d) => {
      return d.Course.date.includes(Year);
    });
  }

  reduceDataAuto(ModifiedData) {
    let sum
    if (ModifiedData.length == 1) {
      sum = Number(ModifiedData["0"].CourseHasCheval.part_entraineur);
    } else {
      sum = ModifiedData.reduce((previous, current) => {
        let prevResult = Number(previous) ? previous : previous.CourseHasCheval.part_entraineur;
        return Number(prevResult) + Number(current.CourseHasCheval.part_entraineur);
      });
    }
    return sum;
  }
     reduceTotAlloc() {
    let sum
    if (this.members.length == 1) {
      sum = Number(this.members["0"].CourseHasCheval.part_entraineur);
    } else {
      sum = this.members.reduce((previous, current) => {
        let prevResult = Number(previous) ? previous : previous.CourseHasCheval.part_entraineur;
        return Number(prevResult) + Number(current.CourseHasCheval.part_entraineur);
      });
    }
    return sum;
  }
   reduceDataVict(ModifiedData) {

    return ModifiedData.filter((r) => {
      return r.CourseHasCheval.rang.includes(1);
    }).length;
  } 
   reduceDataTotVict() {

    return this.members.filter((r) => {
      return r.CourseHasCheval.rang.includes(1);
    }).length;
  } 

}
