import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingtagsAddnewComponent } from './settingtags-addnew/settingtags-addnew.component';

@Component({
  selector: 'iv-settings-tags',
  templateUrl: './settings-tags.component.html',
  styleUrls: ['./settings-tags.component.css']
})
export class SettingsTagsComponent implements OnInit {


  constructor(private dialogRef : MatDialog) { }

  // private function to open popup
  showDialog(){
    const dialogRef = this.dialogRef.open(SettingtagsAddnewComponent, {
      width:'680px',
      height:'530px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
