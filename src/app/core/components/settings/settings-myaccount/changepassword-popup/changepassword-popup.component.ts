import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'iv-changepassword-popup',
  templateUrl: './changepassword-popup.component.html',
  styleUrls: ['./changepassword-popup.component.css']
})
export class ChangepasswordPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangepasswordPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
