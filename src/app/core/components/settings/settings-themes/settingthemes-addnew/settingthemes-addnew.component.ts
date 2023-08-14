import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'iv-settingthemes-addnew',
  templateUrl: './settingthemes-addnew.component.html',
  styleUrls: ['./settingthemes-addnew.component.css']
})
export class SettingthemesAddnewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SettingthemesAddnewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
