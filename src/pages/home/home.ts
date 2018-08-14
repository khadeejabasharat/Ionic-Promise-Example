import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  label:string=""

  constructor(public navCtrl: NavController) {

  }
  checkAuth = () => {    
    return new Promise((resolve, reject) => {
      this.label="Checking Authentication..."
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
 fetchUser = () => {
    return new Promise((resolve, reject) => {
      this.label="Fetching User...";
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
  getUser():void{
    this.checkAuth()
    .then(
      isAuth => {
        if (isAuth) {
          return this.fetchUser()
        }
      }
    )
    .then(
      user => {
        this.label="Khadeeja Basharat";
      }
    );
  }

}
