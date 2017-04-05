import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CognitoService } from '../../providers/cognito-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {email: '', name: '', password: ''};

  errorMsg:string;

  constructor(private nav: NavController, private cognitoService: CognitoService) {}

  public register() {
    var self=this;
    console.log(this.registerCredentials);
    this.cognitoService.register(this.registerCredentials, function(err,result){
      if (err) {
        console.log(err);
        self.errorMsg = err;
        console.log(err);
      } else {
        console.log(result);
        this.showPopup('Success!', result);
      }
    });
  }

  showPopup(title, text) {
    // let alert = this.alertCtrl.create({
    //   title: title,
    //   subTitle: text,
    //   buttons: [
    //    {
    //      text: 'OK',
    //      handler: data => {
    //        if (this.createSuccess) {
    //          this.nav.popToRoot();
    //        }
    //      }
    //    }
    //  ]
    // });
    // alert.present();
  }
}
