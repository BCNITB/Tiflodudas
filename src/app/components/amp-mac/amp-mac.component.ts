import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-amp-mac',
  templateUrl: './amp-mac.component.html',
  styleUrls: ['./amp-mac.component.scss'],
})
export class AmpMacComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Magnificación MacOS');
   }

  ngOnInit() {}

}
