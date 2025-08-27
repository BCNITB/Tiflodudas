import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Student');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}
