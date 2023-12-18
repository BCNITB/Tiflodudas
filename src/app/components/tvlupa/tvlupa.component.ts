import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tvlupa',
  templateUrl: './tvlupa.component.html',
  styleUrls: ['./tvlupa.component.scss'],
})
export class TvlupaComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Telelupa');
   }

  ngOnInit() {}

}
