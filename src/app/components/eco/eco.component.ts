import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.scss'],
})
export class EcoComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Línea Braille ECO');
   }

  ngOnInit() {}

}
