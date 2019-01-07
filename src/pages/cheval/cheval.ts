import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController} from 'ionic-angular';
import {ServiceProvider} from '../../providers/service-provider';
import {ViewChevalPage } from '../view-cheval/view-cheval';
import { MenuController } from 'ionic-angular';

/*
  Generated class for the Cheval page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-cheval',
  templateUrl: 'cheval.html'
})
export class ChevalPage {

    
 // chevals : any[] ;
  cheval : string ="Compteurs";
   members;
   loader: any;
   ch: string;
   items ;
   searchMembers ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data: ServiceProvider, public loadingCtrl:LoadingController  ,public menuCtrl: MenuController ) {
  this.getDados();
  this.initializeItems();

}
left() {
  this.menuCtrl.toggle('left');
}

right() {
  this.menuCtrl.toggle('right');
}
    ngOnInit()
  {
      this.presentLoading();
      this.data.getData().subscribe(
        data => {
          this.members = data;
         // this.searchOperation();
     //     console.log(data);
            this.loader.dismiss();
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
    );
  }

 presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    }
    
 getDados() {
      //retorno de Dados
    return  this.data.getData()
            .subscribe(
                  data=> {
                      this.members = data;
                       this.searchOperation();
                      console.log(data);
                      
                  },
                  err=> console.log(err)
                  
            );
      }


searchOperation(){
  this.searchMembers = this.members ;
}
      
Viewperson()
{
    this.navCtrl.push(ViewChevalPage);
}

View(member)
{
    this.navCtrl.push(ViewChevalPage,{member:member});
}
/*searchCh(event, key)
  {
      if(event.target.value.length > 0) {
          this.data.search(event.target.value).subscribe(
              data => {
                  this.members = data;
                  console.log(data);
              },
              err => {
                  console.log(err);
              },
              () => console.log('Movie Search Complete')
          );
      }
  }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChevalPage');
      
  
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
        return (member.Cheval.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
