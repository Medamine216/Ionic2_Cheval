import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
/*
  Generated class for the DetailJockey page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-jockey',
  templateUrl: 'detail-jockey.html'
})
export class DetailJockeyPage {

jockey
 idJockey ;
 jockeys : string ="Performance";
 year ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
      this.idJockey = navParams.data.j ;
      this.getDetailJockey();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailJockeyPage');
    console.log(this.idJockey);
  }

   getDetailJockey() {
    return this.data.getCourseJockey(this.idJockey.Jockey.id)
      .subscribe(
      data => {
        this.jockey = data.Course;
        this.year = data.engagements ;
           console.log(this.jockey);
           console.log(this.year);
      },
      err => console.log(err)
      );
}
filterDataAuto(Year) {
    return this.jockey.filter((d) => {
      return d.Course.date.includes(Year);
    });
  }

  reduceDataAuto(ModifiedData) {
    let sum
    if (ModifiedData.length == 1) {
      sum = Number(ModifiedData["0"].CourseHasCheval.part_jokey);
    } else {
      sum = ModifiedData.reduce((previous, current) => {
        let prevResult = Number(previous) ? previous : previous.CourseHasCheval.part_jokey;
        return Number(prevResult) + Number(current.CourseHasCheval.part_jokey);
      });
    }
    return sum;
  }
     reduceTotAlloc() {
    let sum
    if (this.jockey.length == 1) {
      sum = Number(this.jockey["0"].CourseHasCheval.part_jokey);
    } else {
      sum = this.jockey.reduce((previous, current) => {
        let prevResult = Number(previous) ? previous : previous.CourseHasCheval.part_jokey;
        return Number(prevResult) + Number(current.CourseHasCheval.part_jokey);
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

    return this.jockey.filter((r) => {
      return r.CourseHasCheval.rang.includes(1);
    }).length;
  } 

}
