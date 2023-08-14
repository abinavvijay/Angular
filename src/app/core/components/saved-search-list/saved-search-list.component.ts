import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'iv-saved-search-list',
  templateUrl: './saved-search-list.component.html',
  styleUrls: ['./saved-search-list.component.css']
})
export class SavedSearchListComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  items: Array<any> = [];
  spin: boolean = true;
  pages: number = 0;
  _currentPage: number = 1;
  bindableItems:Array<any>=[];

  set currentPage(val: number) {
    this._currentPage = val;
    if(this.items.length>0){
      this.getBindableList(this.currentPage);
    }

  }
  get currentPage() { return this._currentPage; }

  ngOnInit(): void {
    this.searchService.retriveSavedSearchs().subscribe(t => {
      this.items = t.data;
      this.spin = false;
      this.pages = Math.ceil(this.items.length / 10);
      this.getBindableList(this.currentPage);
      console.log(this.items)
    })
  }

  private getBindableList(index:number){

    let pos = (index * 10);
    this.bindableItems = this.items.slice(pos-10, pos).map(x => x)

  }



}
