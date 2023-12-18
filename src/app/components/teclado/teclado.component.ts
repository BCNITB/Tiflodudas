import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss'],
})
export class TecladoComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Teclado 2.0');
   }

  ngOnInit() {}

}
