import { Component, OnInit } from '@angular/core';
import { EdituserPopupComponent } from './edituser-popup/edituser-popup.component';
import { DeleteuserPopupComponent } from './deleteuser-popup/deleteuser-popup.component';
import { AdduserPopupComponent } from './adduser-popup/adduser-popup.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'iv-settings-manageruser',
  templateUrl: './settings-manageruser.component.html',
  styleUrls: ['./settings-manageruser.component.css']
})
export class SettingsManageruserComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}

  openPopup(){
    const dialogRef = this.dialog.open(EdituserPopupComponent,{
      width: '360px',
  height: '388px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDelPopup(){
    const dialogRef = this.dialog.open(DeleteuserPopupComponent,{
      width: '330px',
  height: '336px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddPopup(){
    const dialogRef = this.dialog.open(AdduserPopupComponent,{
      width: '680px',
  height: '430px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
