import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordPopupComponent } from '../changepassword-popup/changepassword-popup.component';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';

@Component({
  selector: 'iv-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openPopup(){
    const dialogRef = this.dialog.open(ChangepasswordPopupComponent, {
      width:'680px',
      height:'498px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editPopup(){
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width:'360px',
      height:'528px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
