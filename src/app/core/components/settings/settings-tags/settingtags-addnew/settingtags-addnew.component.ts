import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'iv-settingtags-addnew',
  templateUrl: './settingtags-addnew.component.html',
  styleUrls: ['./settingtags-addnew.component.css']
})
export class SettingtagsAddnewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SettingtagsAddnewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
