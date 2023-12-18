import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.page.html',
  styleUrls: ['./accesibilidad.page.scss'],
})
export class AccesibilidadPage implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Tiflodudas | Accesibilidad');
   }

  ngOnInit() {
  }

}
