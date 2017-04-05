import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { CognitoService } from '../../providers/cognito-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { ResendCodePage } from '../resend-code/resend-code';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  currentSection='login';

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(
    private nav: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private cognitoService: CognitoService,) {}


  // Show the proper form based on user selection.
  showSection(section) { this.currentSection=section; }


  // Send a login request to the backend.
  doLogin() {
    console.log('login');
    this.showLoading()
    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   if (allowed) {
    //     setTimeout(() => {
    //     this.loading.dismiss();
    //     this.nav.setRoot(HomePage)
    //     });
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // },
    // error => {
    //   this.showError(error);
    // });
  }


  // Send a registration confirmation to the backend using a confirmation code.
  doConfirmCode() {

  }


  // Send a forgot password request to the backend.
  doForgotPassword() {

  }


  // Send a resend validation code to the backend.
  doResendCode(){

  }


  // Send a new user registration request to the backend.
  doRegister() {

  }



  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
