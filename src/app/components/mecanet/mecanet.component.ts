import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mecanet',
  templateUrl: './mecanet.component.html',
  styleUrls: ['./mecanet.component.scss'],
})
export class MecanetComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Mecanet');
    
   }

  ngOnInit() {}

}
