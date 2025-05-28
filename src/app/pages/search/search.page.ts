import { Component, OnInit, Injector } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';

import { Items } from 'src/app/interfaces/items';
import { ItemService } from 'src/app/services/item.service';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { SearchService } from 'src/app/services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items: Items[] = [];
  filteredItems: Items[] = [];
  searchValue: string = '';

  resultsCount: number = 0;
  page: number = 0;
  pageSize: number = 10;

  constructor(
    private title: Title,
    private searchService: SearchService,
    private itemSrvc: ItemService,
    private navCtrl: NavController,
  ) {
    this.title.setTitle('Tiflodudas | Búsqueda');
  }

  ngOnInit() {
    this.itemSrvc.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = items;
    });
  }

  onSearch() {
    const terms = this.searchValue.toLowerCase().split(' ').filter(t => t.trim() !== '');
    this.page = 0; 
    if (terms.length === 0) {
      this.filteredItems = this.items;
      this.resultsCount = this.filteredItems.length;
      return;
    }
    this.filteredItems = this.items.filter(item => {
      const classification = (item.classification || item.consult || '').toLowerCase();
      return terms.every(term => classification.includes(term));
    });
    this.resultsCount = this.filteredItems.length;
  }

  get pagedItems() {
    const start = this.page * this.pageSize;
    return this.filteredItems.slice(start, start + this.pageSize);
  }

  nextPage() {
    if ((this.page + 1) * this.pageSize < this.filteredItems.length) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.page--;
    }
  }

  show(page: any){
    this.navCtrl.navigateForward('/details/'+page);
  }
}