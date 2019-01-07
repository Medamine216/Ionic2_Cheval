import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChevalPage } from '../view-cheval/view-cheval';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the DetailEtalon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



@Component({
  selector: 'page-detail-etalon',
  templateUrl: 'detail-etalon.html'
})
export class DetailEtalonPage {
  public courseEtalon;
  public members;
  public cheval;
  public engagement;
  public course ; production ; total;
  etalon: string = "Production";
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ServiceProvider) {

    this.courseEtalon = navParams.data.e;

    this.getProdEtalon();
    this.getDetailEtalon();

  }

  ionViewDidLoad() {
    console.log('DetailEtalonPage');

  }

  View(member) {
    this.navCtrl.push(ViewChevalPage, { member: member });
  }
  getDetailEtalon() {
    return this.data.getDetailEtalon(this.courseEtalon[0], this.courseEtalon[1])
      .subscribe(
      data => {
        this.cheval = data;
        console.log("From get data etalon function", this.cheval);
      },
      err => console.log(err)
      );
  }
  getProdEtalon() {
    return this.data.viewEtalon(this.courseEtalon[0], this.courseEtalon[1], "etalon")
      .subscribe(
      data => {
        this.members = data.etalon;
        this.production = data.production.detail ;
        this.total =data.production.Total;
       // this.course = this.members.Course;
       // this.engagement = data.engagements;
        // JSON.stringify(this.members);
        console.log("Production", this.total);
      },
      err => console.log(err)


      );
  }
  filterDataAuto(data) {
    return data.filter((r) => {
      return r.CourseHasCheval.rang == 1;

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


  filterData(Year) {
    return this.members.filter((date) => {
      for (var cheval = 0; cheval < date.Course.length; cheval++)
        if (date.Course[cheval].Course.date.includes(Year)) {
          return date.Course[cheval].Course.date.includes(Year);
        }
      // return date.Course[cheval].Course.date.includes(Year);

    });
  }

  reduceData(ModifiedData) {
    console.log(ModifiedData);
    return ModifiedData.length;
  }

}