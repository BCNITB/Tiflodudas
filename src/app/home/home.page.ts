import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logged: string;

  constructor() {
    this.logged = "";
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }

}
