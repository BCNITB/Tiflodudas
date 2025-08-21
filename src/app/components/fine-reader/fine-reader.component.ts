import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fine-reader',
  templateUrl: './fine-reader.component.html',
  styleUrls: ['./fine-reader.component.scss'],
})
export class FineReaderComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('FineReader');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}