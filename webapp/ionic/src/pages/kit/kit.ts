import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ThingService } from '../../providers/thing-service';
import moment from 'moment';
import chartjs from 'chart.js';

/*
  Generated class for the Kit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-kit',
  templateUrl: 'kit.html'
})
export class KitPage {

  public id: any;
  public data: any;
  public points: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public thingService: ThingService) {

    this.id = navParams.get('id');

    // Get data for this kit.
    this.loadThings(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KitPage');
  }

  loadThings(id) {
    this.thingService.load(id)
    .then(result => {
      this.data = result;
      this.data = this.data.Items;
      var points = [];
      for (var i=0; i<this.data.length; i++) {
        points.push({
          x: moment.unix((this.data[ i].Timestamp.S)/1000),
          y: parseInt(this.data[ i].payload.M.light.S)
        });
      }
      console.log(points);
      this.points = points;

      // Process data
      var ctx = document.getElementById("myChart");
      new chartjs(ctx, {
        type: 'line',
        data: {
            datasets: [{
              label: 'Light',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.points,
            }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                parse: false,


              }
            }]
          }
        }
      });
    });
  }
}
