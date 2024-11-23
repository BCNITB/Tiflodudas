import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  logged: string;

  constructor(private title: Title) {
    
    title.setTitle('Tiflodudas');
    
    if(localStorage.getItem('state') == undefined){
      localStorage.setItem('state', 'no connected');
      this.logged = "no connected";
    }
  }

  ngOnInit(): void {
      
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }
}
