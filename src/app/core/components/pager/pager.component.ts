import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'iv-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  selectedAll: boolean = false;

  @Output() selectAllEvent = new EventEmitter<boolean>();

  selected: string = "1";
  _totalPages!: number
  constructor() { }

  @Input()
  set pageCount(count: number) {
    this._totalPages = count;
    // this.pages = [];
    this.subPaging(parseInt(this.selected), this._totalPages);

  }



  pages: Array<any> = [];

  _currentPage: number = 1;
  _currentPageIndex = 0;

  @Output() currentPageChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() set currentPage(value: any) {
    this.selected = this._currentPage = value;
    this.subPaging(parseInt(this.selected), this._totalPages);

  }

  @Output() onSortingChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {

    if (this.currentPage)
      this.selected = this.currentPage.toString();

  }

  ngAfterContentInit() {


  }

  ngAfterViewInit(): void {
    //this.ngOnInit();
  }

  onItemClick(item: any, index: number) {
    this.selected = item.toString();
    this._currentPageIndex = index;
    this.currentPageChange.emit(item);
      this.selectedAll= false;
      this.selectAllEvent.emit(false);

  }

  onNext() {

    let selected = parseInt(this.selected);
    if (selected < this._totalPages) {
      this.selected = (selected++).toString();
      this.subPaging(selected, this._totalPages);
      this.currentPageChange.emit(selected);
      this.selectedAll= false;
      this.selectAllEvent.emit(false);

    }
  }
  onPrevious() {

    let selected = parseInt(this.selected);
    if (selected > 1) {
      this.selected = (selected--).toString();
      this.subPaging(selected, this._totalPages);
      this.currentPageChange.emit(selected);
      this.selectedAll= false;
      this.selectAllEvent.emit(false);

    }
  }

  subPaging(currentPage: number, totalPages: number) {

    let pageLotSart = Math.floor(currentPage / 10) * 10;
    pageLotSart = currentPage == pageLotSart && pageLotSart - 10 > -1 ? pageLotSart - 10 : pageLotSart;
    let limit = pageLotSart + 10 > totalPages ? totalPages : pageLotSart + 10;
    this.pages = [];
    for (let i = pageLotSart; i < limit; i++) {
      this.pages.push(i + 1);
    }
  }

  OnChangeSorting(currentSelection:MatSelectChange ){
    this.onSortingChange.emit(currentSelection.value);
  }

  onSelectedCheckbox(){
    this.selectedAll = !this.selectedAll;
    this.selectAllEvent.emit(this.selectedAll);
  }

}


