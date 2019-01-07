import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the ConsutationCourse page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-consutation-course',
  templateUrl: 'consutation-course.html'
})
export class ConsutationCoursePage {
  public members ; 
  public course ;
public csl ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : ServiceProvider) {

    
      this.course = navParams.data.m ;
      this.csl =this.course.Course;
      console.log( this.csl);
        this.getCourse_Consultation();

  }
      ionViewDidLoad() {
    console.log('ionViewDidLoad ConsutationCoursePage');
  }
    getCourse_Consultation() {
    return this.data.getConsultation(this.course.Course.id)
      .subscribe(
      data => {
        this.members = data;
          console.log("members ", this.members);
      },
      err => console.log(err)
      );
}


}
