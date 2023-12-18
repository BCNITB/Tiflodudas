import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lupa-win',
  templateUrl: './lupa-win.component.html',
  styleUrls: ['./lupa-win.component.scss'],
})
export class LupaWinComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Magnificación Windows');
   }

  ngOnInit() {}

}
