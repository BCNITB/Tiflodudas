import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

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
