import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { Notifications } from '../notifications';

@Component({
  selector: 'iv-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})



export class UserNotificationsComponent implements OnInit {

  notification!: Notifications[];

  userId : any

  count : any;


  constructor(private notificationRef: MatDialogRef<UserNotificationsComponent>,
        private notificationDetails: NotificationsService,
    ) { }

  closeNotification(){
    this.notificationRef.close(UserNotificationsComponent)
  }

  ngOnInit(): void {
        this.getNotifications()


  }

  getNotifications(){



    this.notificationDetails.getNotification().subscribe(response =>{
        console.log(response);
        this.notification= response

        this.count =  this.notification.length
        console.log(this.count);

      }

    )



  }



  // private  notificationUrl = `http://54.153.77.41/notification/desktop/${this.userId}`




}
