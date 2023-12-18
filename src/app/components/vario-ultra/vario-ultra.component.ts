import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vario-ultra',
  templateUrl: './vario-ultra.component.html',
  styleUrls: ['./vario-ultra.component.scss'],
})
export class VarioUltraComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Línea Braille Vario Ultra');
   }

  ngOnInit() {}

}
