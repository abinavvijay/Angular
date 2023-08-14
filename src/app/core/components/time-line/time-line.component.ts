import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iv-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  @Input()
  datasource: Array<any> = [];

  @Input()
  label: string = "Timeline";

  @Input()
  displayText: string = "text";

  @Input()
  value: string = "val"

  @Input()
  selectionLabel: string = "Some Text"

  @Input()
  selectionTextPrefix: string = "All"

  @Input()
  selectedOptions: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
