import { Injectable } from '@angular/core';

declare var AWSCognito: any;

@Injectable()
export class CognitoService {

  public static poolData = {
    UserPoolId: 'eu-central-1_rE6KH7jkv', //environment.userPoolId;
    ClientId: '6q87q02f48q3bllfcn149901fm' //environment.clientId;
  }

  constructor() {
    console.log('Hello CognitoService Provider');
  }

  // Get the user pool for this app.
  public getUserPool() {
    return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(CognitoService.poolData);
  }


  // Get currently logged in user
  public getCurrentUser() {
    var currentuser = this.getUserPool().getCurrentUser();
    console.log('currentuser: ' , currentuser);
    return currentuser;
  }


  // Register a new user.
  register(user, cb) {
    let attributeList = [];

    let dataEmail = {
        Name: 'email',
        Value: user.email
    };
    let dataName = {
        Name: 'name',
        Value: user.name
    };
    attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail));
    attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName));

    this.getUserPool().signUp(user.name, user.password, attributeList, null, cb);

  }


  // Validate the validation code after registration
  confirmRegistration(username:string, confirmationCode:string, cb) {
    let userPool = this.getUserPool();
    let userData = {
      Username: username,
      Pool : userPool
    };
    let cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, cb);
  }

  // Resend validation code
  resendValudationCode(username:string, cb) {

    let userData = {
      Username : username,
      Pool : this.getUserPool()
    };
    let cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    cognitoUser.resendConfirmationCode(cb);
  }


  authenticate(username:string, password:string, cb) {

  }

  forgotPassword(username:string, cb) {

  }

  confirmNewPassword(email:string, verificationCode:string,password:string, cb) {

  }

  logout() {

  }

  // Check if current user is authenticated.
  isAuthenticated(cb) {
    let cognitoUser = this.getCurrentUser();
    if (cognitoUser != null) {
      cognitoUser.getSession(function(err,session) {
        cb(session.isValid());
      })
    } else {
      cb(false);
    }

  }

  getParameters(cb) {

  }
}
