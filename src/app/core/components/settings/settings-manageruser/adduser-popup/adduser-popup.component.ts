import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'iv-adduser-popup',
  templateUrl: './adduser-popup.component.html',
  styleUrls: ['./adduser-popup.component.css']
})
export class AdduserPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdduserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
