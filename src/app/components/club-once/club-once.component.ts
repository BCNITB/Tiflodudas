import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-club-once',
  templateUrl: './club-once.component.html',
  styleUrls: ['./club-once.component.scss'],
})
export class ClubOnceComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('ClubONCE');
   }

  ngOnInit() {}

}
