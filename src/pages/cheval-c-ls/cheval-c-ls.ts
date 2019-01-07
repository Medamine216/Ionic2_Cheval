import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the ChevalCLs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cheval-c-ls',
  templateUrl: 'cheval-c-ls.html'
})
export class ChevalCLsPage {
  public chevalcls
  public members
  public segment : string ="Classement" ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public data : ServiceProvider) {
    this.chevalcls = this.navParams.data.la ;
    console.log(this.chevalcls);
    this.getClassement();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChevalCLsPage');
  }

   getClassement() {
    return this.data.getclassementCheval2(this.chevalcls[0].annee)
      .subscribe(
      data => {
        this.members = data;
          console.log("members ", this.members);
      },
      err => console.log(err)
      );
}

}
