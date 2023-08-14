import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'iv-deleteuser-popup',
  templateUrl: './deleteuser-popup.component.html',
  styleUrls: ['./deleteuser-popup.component.css']
})
export class DeleteuserPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteuserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
