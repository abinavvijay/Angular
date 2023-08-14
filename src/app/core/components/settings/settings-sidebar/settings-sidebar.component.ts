import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iv-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.css']
})
export class SettingsSidebarComponent implements OnInit {

  @Output() clickEvent:EventEmitter<any>= new EventEmitter();


  toggle = true;
 
  constructor() { }

  ngOnInit(): void {
  }

}
