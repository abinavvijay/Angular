import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserNotificationsComponent } from '../../components/notification/user-notifications/user-notifications.component';
import { SpinnerService } from '../../services/spinner.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'iv-index',

  templateUrl: './index.component.html',

  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  @ViewChild("img") img?:ElementRef ;

  @ViewChild("profile") profile?:ElementRef ;

  currentMenuItem: string = '';

  userId: any;

  user: any;

  public amxLoggedInUser: any;
  
  displayProfile:boolean=false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: SpinnerService,
    private userNotification: MatDialog,
    private route: Router,
    private authService:AuthService
  ) {

  }

  spin: number = 0;
  session:any;
  plot:any;
  ngAfterViewInit():void{
    this.plot=this.img?.nativeElement.getBoundingClientRect();
    console.log(this.plot)

  }
  ngOnInit(): void {

     

    this.authService.UserSession.subscribe(session=>{
      this.session=session;

    })
    setTimeout(() => {
      this.activatedRoute.params.subscribe((params) => {
        this.spinner.state.subscribe((t) => {
          this.spin = t;


          console.log(t);
        });
      });
    });
  }

  openNotification(): void {
    const SearchNotification = this.userNotification.open(
      UserNotificationsComponent,
      {
        width: '380px',

        height: '1024px',

        position: {
          top: '0',

          right: '0',
        },
      }
    );
  }




  onNoDataOkay(){
    this.spin=0;
    this.route.navigate(["/search"]);
  }

  logout() {

   this.authService.Logout();
   this.route.navigate(['/login']);
   this.displayProfile= !this.displayProfile;

    }
}
