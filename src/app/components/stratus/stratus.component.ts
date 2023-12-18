import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stratus',
  templateUrl: './stratus.component.html',
  styleUrls: ['./stratus.component.scss'],
})
export class StratusComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Victor Reader Stratus');
   }

  ngOnInit() {}

}
