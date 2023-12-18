import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-narrador',
  templateUrl: './narrador.component.html',
  styleUrls: ['./narrador.component.scss'],
})
export class NarradorComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Narrador');
   }

  ngOnInit() {}

}
