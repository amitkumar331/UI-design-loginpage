import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goToSecondPage() {
    this.navCtrl.navigateForward('/otp');
  }
}
