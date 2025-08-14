import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    title.setTitle('Victor Reader Stream 2');

    this.category='all';
  }

  ngOnInit() {
  }


  selection(e:string){
    this.category=e;
  }
}