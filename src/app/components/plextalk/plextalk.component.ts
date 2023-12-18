import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-plextalk',
  templateUrl: './plextalk.component.html',
  styleUrls: ['./plextalk.component.scss'],
})
export class PlextalkComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('PlexTalk');
   }

  ngOnInit() {}

}
