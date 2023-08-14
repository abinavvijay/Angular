import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iv-searh-result-bar',
  templateUrl: './searh-result-bar.component.html',
  styleUrls: ['./searh-result-bar.component.css']
})
export class SearhResultBarComponent implements OnInit {

  constructor() { }
 
  _currentPage: number = 1;

  @Output() currentPageChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() set currentPage(value: any) {
    console.log(value);
    this.page = value;

  }
  @Output()
  onDownload: EventEmitter<any> = new EventEmitter<any>();
 
page:string="All Results";
  ngOnInit(): void {
  }

  clickEvent(item:string){
    this.currentPageChange.emit(item);
    this.page=item;
  }

  download(){
    this.onDownload.emit(true);
  }

}
