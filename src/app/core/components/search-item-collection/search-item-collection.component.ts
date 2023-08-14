import { Component, Input, OnInit, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
@Component({
  selector: 'iv-search-item-collection',
  templateUrl: './search-item-collection.component.html',
  styleUrls: ['./search-item-collection.component.css']
})
export class SearchItemCollectionComponent implements OnInit {

  private _selected = false;

  constructor() { }

  @Input()
  public items: Array<any> = []

  bindList:Array<any>=[];

  @Input() currentPage: number = 1;

  // SelectAll
  @Input()
  selectedAll: boolean = false;

  @Output() selectionChanged= new EventEmitter<boolean>();

  allSelected: boolean= true;

  ngOnInit(): void {
    // let startPos = (this.currentPage * 10) - 10;
    // this.items = this.items.slice(startPos, 10).map(x => x);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.currentPage);
    let pos = (this.currentPage * 10);
    this.bindList = this.items.slice(pos-10, pos).map(x => x);
        // selectAll
        if(changes['selectedAll']){
          const allSelected = changes['selectedAll'].currentValue
          // this._selected = changes['selectedAll'].currentValue;
          console.log(allSelected,"SelectedALL and deselecting");
          this.items.forEach(item => item.selected = allSelected)

        }
  }

  // get selected(): boolean{
  //   return this._selected;
  // }

  // set selected(value: boolean){
  //   this._selected = value;
  //   this.selectionChanged.emit(this._selected)
  // }

  onSelectionChanged(selected: boolean,item:any){
    console.log(selected,"Items collection");
    item.selected = selected;
    this.allSelected = this.items.every(item => item.selected);

    if(!this.allSelected){
      this.selectedAll=false
    }
    this.selectionChanged.emit(item);

  }

}
