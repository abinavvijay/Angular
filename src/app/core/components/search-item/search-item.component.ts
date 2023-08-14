import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'iv-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  constructor() { }

  // SelectAll
  @Input() selectedAll!: boolean;

  @Output() selectionChanged = new EventEmitter<boolean>();

  @Input()
  public item:any;

  bookMark: boolean= false;
  showTextareaBox = false;

  ngOnInit(): void {
  }

  setDefaultImage(event:any){
event.target.src='./assets/images/noimage.png';

  }

  bookMarkColor(){
    this.bookMark = !this.bookMark
  }

  checkboxChanged(event: any){
    console.log(event, "Single Items");
    this.selectedAll= !this.selectedAll
    // this.selectedAll = event.target.checked;
    this.selectionChanged.emit(this.item)


  }


}
