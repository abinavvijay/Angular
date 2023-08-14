import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iv-result-figure',
  templateUrl: './result-figure.component.html',
  styleUrls: ['./result-figure.component.css']
})
export class ResultFigureComponent implements OnInit {

  constructor() { }

  @Input()
  figure:string="";
  
  @Input()
  figureType:string=""

  @Input() isPositive:boolean =false;

  @Input() percentage:string="";

  ngOnInit(): void {
  }

}
