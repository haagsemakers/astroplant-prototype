// First component

import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { CognitoService } from '../providers/cognito-service';

@Component({
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {
  rootPage = TabsPage;

  constructor(platform: Platform, public cognitoService: CognitoService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit() {
    console.log("AppComponent: Checking if the user is already authenticated");

    this.cognitoService.isAuthenticated(function(status) {
      if (status) {
        console.log('user is authenticated. ');

      }
    });
  }
}
