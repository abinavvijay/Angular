import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iv-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {


  @Input()
  newsArticlesData: any[] = [];

  displayedItems: any[]=[];

  // OpeningInput Title
  @Output() inputChanged= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['newsArticlesData']){
      this.displayedItems = this.newsArticlesData.slice(0,10);
  }

  // onPageChanged(page: number){
  //   const startIndex = (page -1) * 10;
  //   const endIndex = startIndex + 10;
  //   this.displayedItems = this.newsArticlesData.slice(startIndex, endIndex);
  // }

}
// OpeningTitle Input

onInputChange(value: string){
  this.inputChanged.emit(value)
}
}
