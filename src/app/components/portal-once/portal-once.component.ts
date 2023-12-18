import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portal-once',
  templateUrl: './portal-once.component.html',
  styleUrls: ['./portal-once.component.scss'],
})
export class PortalOnceComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('PortalONCE');
   }

  ngOnInit() {}

}
