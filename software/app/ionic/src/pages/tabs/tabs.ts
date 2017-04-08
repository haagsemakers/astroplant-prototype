import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { KitsPage } from '../kits/kits';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = KitsPage;
  tab3Root: any = AboutPage;
  tab4Root: any = LoginPage;

  constructor() {

  }
}
