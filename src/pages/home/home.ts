import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

declare const ENV;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  envVars: any;

  constructor(public navCtrl: NavController) {
    this.envVars = ENV;
  }

}
