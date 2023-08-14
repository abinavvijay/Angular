import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'iv-dashboard-widgets-popup',
  templateUrl: './dashboard-widgets-popup.component.html',
  styleUrls: ['./dashboard-widgets-popup.component.css']
})
export class DashboardWidgetsPopupComponent implements OnInit {

  constructor(private bottomSheetRef: MatDialogRef<DashboardWidgetsPopupComponent>) { }

  closeDialog(){
    this.bottomSheetRef.close(DashboardWidgetsPopupComponent)
  }
  ngOnInit(): void {
  }

}
