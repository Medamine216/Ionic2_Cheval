import { Component } from '@angular/core';
import * as $ from 'jquery';
import { NavController } from 'ionic-angular';
import { PalmaresPage } from '../palmares/palmares';
import { ChevalPage } from '../cheval/cheval';
import { EtalonsPage } from '../etalons/etalons';
import { PereDeMerePage } from '../pere-de-mere/pere-de-mere';
import { MerePage } from '../mere/mere';
import {JockeyPage} from '../jockey/jockey';
import {EntraineurPage} from '../entraineur/entraineur';
import {EleveurPage} from '../eleveur/eleveur';
import {ListePrixPage} from '../liste-prix/liste-prix';
import {ListeCategoriePage} from '../liste-categorie/liste-categorie';
import {ListeAnneePage} from '../liste-annee/liste-annee';
@Component({
  selector: 'my-page',
  templateUrl: 'home.html'
})

export class HomePage {
  items = [
    'Cheval',
    'Étalon',
    'Père de mère',
    'mère'
      ];
  Personnel = [
    'Éleveurs',
    'Entraineurs',
    'Jockey',
  ];
  consult = [
       'Course par date',
       'Vainqueurs par prix',
       'Vainqueurs par Catégorie',
  ] ;
      cls = [
    'Cheval',
    'Étalon',
    'Père de mère'
      ];
  Cheveaux: any;
   isAdded: boolean = false;
   isAdded1: boolean = false;
   isAdded2: boolean = false;
   isAdded3: boolean = false;
   isAdded4: boolean = false ;
   isDisplaylist : boolean =false ;
  // tab1Root: any = ChevalPage;
  constructor(public navCtrl: NavController) {
    this.Cheveaux = ListePrixPage;
  }
  

  clickFunction() {
    this.isAdded = !this.isAdded;
  }
  clickFunction1() {
    this.isAdded1 = !this.isAdded1;
  }
  clickFunction2() {
    this.isAdded2 = !this.isAdded2;
  }
  clickFunction3() {
    this.isAdded3 = !this.isAdded3;
  }
   clickFunction4() {
    this.isAdded4 = !this.isAdded4;
  }
    displayList() {
    this.isDisplaylist = !this.isDisplaylist;
  
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  nextpage() {
    this.navCtrl.push(PalmaresPage);
  }
  SuivantCLs(cls) {
    if (cls == "Cheval") {
      this.navCtrl.push(ListeAnneePage , {nom : cls});
    }
    else
      if (cls == "Étalon") {
        this.navCtrl.push(ListeAnneePage , {nom : cls});
      }
      else
        if (cls == "Père de mère") {
          this.navCtrl.push(ListeAnneePage , {nom : cls});
        }
  }
  Suivant(item) {
    if (item == "Cheval") {
      this.navCtrl.push(ChevalPage);
    }
    else
      if (item == "Étalon") {
        this.navCtrl.push(EtalonsPage);
      }
      else
        if (item == "Père de mère") {
          this.navCtrl.push(PereDeMerePage);
        }
        else
          if (item == "mère") {
            this.navCtrl.push(MerePage);
          }
            else
          if (item == "Jockey") {
            this.navCtrl.push(JockeyPage);
          }
             else
          if (item == "Entraineurs") {
            this.navCtrl.push(EntraineurPage);
          }
               else
          if (item == "Éleveurs") {
            this.navCtrl.push(EleveurPage);
          }
                 else
          if (item == "Vainqueurs par prix") {
            this.navCtrl.push(ListePrixPage);
          }
                 else
          if (item == "Vainqueurs par Catégorie") {
            this.navCtrl.push(ListeCategoriePage);
          }
  }
  detailbtn() {
    if ($(".btn-group2:hover")) {
      $(".button").css('margin-bottom', '0px');
      $(".button").css('border-bottom-left-radius', '0px');
      $(".button").css('border-bottom-right-radius', '0px');
    }
  }
  changebtn() {
    {

      $(".list1").css('display', 'block');

    }
  }
  changebtn1() {
    {

      $(".list2").css('display', 'block');

    }
  }
}