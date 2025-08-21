import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-as',
  templateUrl: './google-as.component.html',
  styleUrls: ['./google-as.component.scss'],
})
export class GoogleAsComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Google Assistant');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}