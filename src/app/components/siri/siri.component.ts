import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-siri',
  templateUrl: './siri.component.html',
  styleUrls: ['./siri.component.scss'],
})
export class SiriComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Siri');
   }

  ngOnInit() {}

}
