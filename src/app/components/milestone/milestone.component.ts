import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
})
export class MilestoneComponent  implements OnInit {

  show: number;

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Milestone');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}