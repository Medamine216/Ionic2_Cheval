import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import { MenuController } from 'ionic-angular';
import { ConsutationCoursePage } from '../consutation-course/consutation-course';
/*
  Generated class for the ViewCheval page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-cheval',
  templateUrl: 'view-cheval.html',
})
export class ViewChevalPage {
  cheval;
  isDisplayImage: boolean = false;
  isDisplayGen: boolean = false;
  isDisplayProd: boolean = false;
  isDisplayPerf: boolean = true;
  isDisplayResume: boolean = true;
  allocationSum: number;
  cheval1;
  public members;
  etalon: Array<String>;
  vcheval: string = "Résumé";
  isAdded: boolean = false;
  isAdded1: boolean = false;
  isAdded2: boolean = false;
  TotalVictoire;
  genealogiePere;
  genealogieMere;
  production;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ServiceProvider, public menuCtrl: MenuController) {
    this.cheval = navParams.data.member;
    console.log("cheval", this.cheval);

    this.getIdCheval();
    this.getGenealogiePere();
    this.getGenealogieMere();
    this.getProductionCheval();

  }
  clickFunction() {
    this.isAdded = !this.isAdded;
    this.isAdded1 = false;
    this.isAdded2 = false;
  }
  clickFunction1() {
    this.isAdded1 = !this.isAdded1;
    this.isAdded = false;
    this.isAdded2 = false;
  }
  clickFunction2() {
    this.isAdded2 = !this.isAdded2;
    this.isAdded = false;
    this.isAdded1 = false;
  }
  displayImage() {
    this.isDisplayImage = !this.isDisplayImage;
    this.isDisplayProd = false;
    this.isDisplayGen = false;
    this.isDisplayPerf = !this.isDisplayImage;
    this.isDisplayResume = !this.isDisplayImage;
  }
  displayGenealogie() {
    this.isDisplayGen = !this.isDisplayGen;
    this.isDisplayImage = false;
    this.isDisplayProd = false;
    this.isDisplayPerf = !this.isDisplayGen;
    this.isDisplayResume = !this.isDisplayGen;
  }
  displayProduction() {
    this.isDisplayProd = !this.isDisplayProd;
    this.isDisplayGen = false;
    this.isDisplayImage = false;
    this.isDisplayPerf = !this.isDisplayProd;
    this.isDisplayResume = !this.isDisplayProd;
  }
  DisplayPerf() {
    this.isDisplayPerf = true;
    this.isDisplayResume = false;
    this.isDisplayGen = false;
    this.isDisplayImage = false;
    this.isDisplayProd = false;
    this.isAdded = false;
    this.isAdded1 = false;
    this.isAdded2 = false;
  }
  DisplayResume() {
    this.isDisplayResume = true;
     this.isDisplayPerf = false;
    this.isDisplayGen = false;
    this.isDisplayImage = false;
    this.isDisplayProd = false;
    this.isAdded = false;
    this.isAdded1 = false;
    this.isAdded2 = false;

  }
  left() {
    this.menuCtrl.toggle('left');
  }

  right() {
    this.menuCtrl.toggle('right');
  }
  View(m) {
    this.navCtrl.push(ConsutationCoursePage, { m: m });
  }
  getProductionCheval() {
    return this.data.getProduction(this.cheval.Cheval.nom, this.cheval.Cheval.ne, this.cheval.Cheval.sexe)
      .subscribe(
      data => {
        this.production = data;
        console.log("Production Cheval", this.production);
      },
    );
  }

  getGenealogiePere() {
    return this.data.getGenealogie(this.cheval.Cheval.nom_p, this.cheval.Cheval.ne_p)
      .subscribe(
      data => {
        this.genealogiePere = data;

        console.log("Genelogie Pere", this.genealogiePere);

      },
      err => console.log(err)

      );
  }
  getGenealogieMere() {
    return this.data.getGenealogie(this.cheval.Cheval.nom_m, this.cheval.Cheval.ne_m)
      .subscribe(
      data => {
        this.genealogieMere = data;

        console.log("Genelogie Mere", this.genealogieMere);
      },
      err => console.log(err)

      );
  }
  getIdCheval() {
    return this.data.viewCheval(this.cheval.Cheval.id)
      .subscribe(
      data => {
        this.members = data.course_cheval;
        this.cheval1 = data.engagements;
        console.log("Member ", this.members);
      },
      err => console.log(err)

      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');


  }
  //  getview() {
  //       //retorno de Dados
  //     return  this.data.viewCheval()
  //             .subscribe(
  //                   data=> this.members = data,

  //                   err=> console.log(err)

  //             );
  //       }


  filterDataAuto(Year) {
    return this.members.filter((date) => {

      return date.Course.date.includes(Year);
     
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

  reduceDataVict(ModifiedData) {
    this.TotalVictoire = this.reduceDataVictTot();

    return ModifiedData.filter((rang) => {
      return rang.CourseHasCheval.rang.includes(1);
    }).length;
  }

  reduceDataVictTot() {
    return this.members.filter((data) => {
      return data.CourseHasCheval.rang == 1;
    }).length;
  }

}


