import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {PalmaresPage} from  '../pages/palmares/palmares';
import { ChevalPage } from '../pages/cheval/cheval';
import { ViewChevalPage} from '../pages/view-cheval/view-cheval';
import { EtalonsPage } from '../pages/etalons/etalons';
import {ServiceProvider} from '../providers/service-provider';
import {Groubby} from '../pipes/groubby';
import {OrderByPipe} from '../pipes/formatNumber';
import {DetailEtalonPage} from '../pages/detail-etalon/detail-etalon';
import {PereDeMerePage} from '../pages/pere-de-mere/pere-de-mere';
import {DetailPereDeMerePage} from '../pages/detail-pere-de-mere/detail-pere-de-mere';
import {DetailMerePage} from '../pages/detail-mere/detail-mere';
import {MerePage} from '../pages/mere/mere';
import {JockeyPage} from '../pages/jockey/jockey';
import {DetailJockeyPage} from '../pages/detail-jockey/detail-jockey';
import {EntraineurPage} from '../pages/entraineur/entraineur';
import {EleveurPage} from '../pages/eleveur/eleveur';
import {DetailEntraineurPage} from '../pages/detail-entraineur/detail-entraineur';
import {DetailEleveurPage} from '../pages/detail-eleveur/detail-eleveur';
import {ListePrixPage} from '../pages/liste-prix/liste-prix';
import {ListeCategoriePage} from '../pages/liste-categorie/liste-categorie';
import {VainqueursParPrixPage} from '../pages/vainqueurs-par-prix/vainqueurs-par-prix';
import {ConsutationCoursePage} from '../pages/consutation-course/consutation-course';
import {ChevalCLsPage} from '../pages/cheval-c-ls/cheval-c-ls';
import {EtalonClsPage} from '../pages/etalon-cls/etalon-cls';
import {PereMereClsPage} from '../pages/pere-mere-cls/pere-mere-cls';
import {ListeAnneePage} from '../pages/liste-annee/liste-annee';
import {VainquerParCategoriePage} from '../pages/vainquer-par-categorie/vainquer-par-categorie';
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    PalmaresPage,
    ChevalPage,
    ViewChevalPage,
    DetailEtalonPage,
    EtalonsPage,
    PereDeMerePage,
    DetailPereDeMerePage,
    DetailMerePage,
    MerePage,
    JockeyPage,
    DetailJockeyPage,
    EntraineurPage,
    EleveurPage,
    DetailEntraineurPage,
    DetailEleveurPage,
    ListePrixPage,
    ListeCategoriePage,
    VainqueursParPrixPage, 
    ConsutationCoursePage,
    ChevalCLsPage,
    EtalonClsPage,
    PereMereClsPage,
    ListeAnneePage,
    VainquerParCategoriePage,
    Groubby,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    PalmaresPage,
    ChevalPage,
    ViewChevalPage,
    EtalonsPage,
    DetailEtalonPage,
    PereDeMerePage,
    DetailPereDeMerePage,
    DetailMerePage,
    JockeyPage,
    DetailJockeyPage,
    EntraineurPage,
    EleveurPage,
    DetailEntraineurPage,
    DetailEleveurPage,
    ListePrixPage,
    ListeCategoriePage,
    VainqueursParPrixPage,
    ConsutationCoursePage,
    ChevalCLsPage,
    EtalonClsPage,
    PereMereClsPage,
    ListeAnneePage,
    MerePage,
    VainquerParCategoriePage,
  
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},ServiceProvider]
})
export class AppModule {}
