import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'iv-newletters-title',
  templateUrl: './newletters-title.component.html',
  styleUrls: ['./newletters-title.component.css']
})
export class NewlettersTitleComponent implements OnInit {

  @Output() newsLetterTitle = new EventEmitter<{newsTitle: string, newsDescription: string}>()
  title: any;
  description: any;

  backgroundImages = [
    'url(../../../../../assets/images/background1.png)',
    'url(../../../../../assets/images/background2.png)',
    'url(../../../../../assets/images/background3.png)',
    'url(../../../../../assets/images/background4.png)',
    'url(../../../../../assets/images/background5.png)',
  ];
  selectedBackground = this.backgroundImages[0];

  constructor() { }

  ngOnInit(): void {
  }

  OnInputTitle(){
    this.newsLetterTitle.emit({newsTitle: this.title, newsDescription: this.description})
  }

}
