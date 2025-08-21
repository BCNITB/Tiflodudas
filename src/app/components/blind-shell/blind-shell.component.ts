import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blind-shell',
  templateUrl: './blind-shell.component.html',
  styleUrls: ['./blind-shell.component.scss'],
})
export class BlindShellComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('BlindShell');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}