import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-v-view',
  templateUrl: './v-view.component.html',
  styleUrls: ['./v-view.component.scss'],
})
export class VViewComponent  implements OnInit {

  constructor(private title: Title) {
    title.setTitle('VoiceView');
   }

  ngOnInit() {}

}
