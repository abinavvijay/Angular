import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'iv-edituser-popup',
  templateUrl: './edituser-popup.component.html',
  styleUrls: ['./edituser-popup.component.css']
})
export class EdituserPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EdituserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
