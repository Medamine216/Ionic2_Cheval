import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {

 url1 : string ="http://127.0.0.1:89/cheval_mobile/mobiles/";
 url: string = 'http://www.sfaxenligne.com/chevaux/mobiles/';
api : string =this.url + "cheval/";
api1 : string =this.url + 'performance_cheval/';
api2: string =this.url +"etalon";
api3 : string =this.url +"production_cheval/" ;
api4 : string = this.url +"pere_mere";
api5 : string = this.url +"mere";
api6 : string = this.url +"course_etalon/";
jockey : string =this.url +"jockey";
CourseJockey : string =this.url +"course_jockey/";
entraineur : string =this.url +"entraineur";
eleveur : string =this.url +"eleveur";
CourseEntraineur : string =this.url +"course_entraineur/";
CourseEleveur : string =this.url +"course_eleveur/";
genealogie : string =this.url +"genealogie/";
listPrix : string =this.url +"vainqueur_prix";
VainqueurParPrix : string =this.url +"course_vainqueur_prix/";
production :string =this.url +"production/" ;
Consultation : string =this.url +"course_consultation/";
listeAnnee : string = this.url +"cheval_cls";
listeAnneEalon : string =this.url +"etalon_cls";
listeAnnePereMere : string = this.url +"pere_mere_cls";
ClassementCheval : string = this.url +"course_cheval_cls/";
ClassementEtalon : string =this.url +"course_etalon_cls/" ;
listeCategorie : string = this.url +"vainqueur_categ";
VainqueurParCategorie : string = this.url +"course_vainqueur_categ/";

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }
  getlisteCategorie()
  {
    return this.http.get(this.listeCategorie).map(res=>res.json());
  }
  getVainqueurCategorie(annee,id) {
    return this.http.get(this.VainqueurParCategorie +annee +"/" +id ).map(res=>res.json());
  }
  getclassementCheval()
  {
    return this.http.get(this.listeAnnee).map(res=>res.json());
  }
  getClassementEtalon(annee) {
       return this.http.get(this.ClassementEtalon +annee).map(res=>res.json());
  }
  getlisteanneEtalon() {
    return this.http.get(this.listeAnneEalon).map(res=>res.json());
  }
  getlisteannePereMere() {
    return this.http.get(this.listeAnnePereMere).map(res=>res.json());
  }
   getclassementCheval2(annee)
  {
    return this.http.get(this.ClassementCheval +annee).map(res=>res.json());
  }

  getData() {
              //return this.http.get(this.api + 'apiRecupera.php').map(res=>res.json());
            return this.http.get(this.api).map(res=>res.json());
          }
viewCheval(id) {
            return this.http.get(this.api1 +id).map(res=>res.json());
}
getGenealogie(nom,ne){
  return this.http.get(this.genealogie +nom +"/"  +ne +"/" ).map(res=>res.json());
}
viewEtalon(nom,ne,type)
{
  return this.http.get(this.api3 +nom +"/"  +ne +"/" +type).map(res=>res.json());
}
getEtalon() {
   return this.http.get(this.api2).map(res=>res.json());
}
getDetailEtalon(nom,ne) 
{
  return this.http.get(this.api6 +nom +"/" +ne).map(res=>res.json());
}
getPereDeMere(){
  return this.http.get(this.api4).map(res=>res.json());
}
getMere(){
  return this.http.get(this.api5).map(res=>res.json());
}
getJockey() {
      return this.http.get(this.jockey).map(res=>res.json());
}
getEntraineur() {
      return this.http.get(this.entraineur).map(res=>res.json());
}
getEleveurs() {
  return this.http.get(this.eleveur ).map(res=>res.json());
}
getCourseJockey(id) {
  return this.http.get(this.CourseJockey +id).map(res=>res.json());
}
getCourseEntraineur(id){
  return this.http.get(this.CourseEntraineur +id).map(res=>res.json());
}
getCourseEleveur(id)
{
  return this.http.get(this.CourseEleveur +id).map(res=>res.json());
}
getListePrix()
{
  return this.http.get(this.listPrix).map(res=>res.json());
}
getVainqueurPrix(nom)
{
  return this.http.get(this.VainqueurParPrix +nom).map(res=>res.json());
}
getProduction(nom,ne,sexe)
{
  return this.http.get(this.production +nom +"/" +ne +"/" +sexe ).map(res=>res.json());
}
getConsultation(id)
{
  return this.http.get(this.Consultation +id).map(res=>res.json());
}
// viewCheevalTest(id) {
//   return this.http.get(this.api1 +id).map((res)=>res.json()).subscribe(data => {
//     this.courceCheval=data;
//   });
// }
/*  search(nom){
              return this.http.get(this.api + 'search.php?nom='+nom).map(res=>res.json());
          }*/
}
