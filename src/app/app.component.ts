import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MenuController } from 'ionic-angular';
//import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 cheval ;
  rootPage = HomePage;
  pages = [
    'Palmeres',
    'Cours',
    'Classement',
    'Site Web'
  ];
  constructor(platform: Platform, public menu: MenuController) {
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
     this.menu.enable(true, 'menu1');
      this.menu.enable(true, 'menu2');
  }
  
}
