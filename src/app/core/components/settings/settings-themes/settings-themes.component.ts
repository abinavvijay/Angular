import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingthemesAddnewComponent } from './settingthemes-addnew/settingthemes-addnew.component';

@Component({
  selector: 'iv-settings-themes',
  templateUrl: './settings-themes.component.html',
  styleUrls: ['./settings-themes.component.css']
})
export class SettingsThemesComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  // private function to open popup
  showDialog(){
    const dialogRef = this.dialogRef.open(SettingthemesAddnewComponent, {
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
