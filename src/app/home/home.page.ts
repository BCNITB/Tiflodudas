import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logged: string;

  constructor() {
    if(localStorage.getItem('state') == undefined){
      localStorage.setItem('state', 'no connected');
      this.logged = "no connected";
    }
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }

}
