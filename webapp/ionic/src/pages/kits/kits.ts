import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KitPage } from '../kit/kit';

/*
  Generated class for the Kits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-kits',
  templateUrl: 'kits.html'
})
export class KitsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad KitsPage');
  }

  showKit(id) {
    this.navCtrl.push(KitPage, {
      id: id
    });
  }

}
