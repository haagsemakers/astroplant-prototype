import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { KitsPage } from '../kits/kits';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showKits() {
    this.navCtrl.push(KitsPage);
  }

}
