import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'iv-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.css']
})
export class WipComponent implements OnInit {
  location: Location | undefined;
  constructor(private _location: Location) { 
    this.location=_location;
  }

  ngOnInit(): void {
  }

}
