import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardWidgetsPopupComponent } from '../dashboard-widgets-popup/dashboard-widgets-popup.component';

@Component({
  selector: 'iv-custom-dashboard',
  templateUrl: './custom-dashboard.component.html',
  styleUrls: ['./custom-dashboard.component.css']
})
export class CustomDashboardComponent implements OnInit {

  comp_items =[];
  people_items = []


  constructor(private bottomSheet: MatDialog) { }

  openBottomSheet(): void{
    this.bottomSheet.open(DashboardWidgetsPopupComponent, {
     minWidth: '1519px',
     height: '80vh',
     position:{
      bottom: '0'
     }
    });
  }
  ngOnInit(): void {
  }

}
