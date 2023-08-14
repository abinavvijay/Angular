import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VizCreateOptions, ToolbarPosition } from 'ngx-tableau';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SavedSearchService } from 'src/app/core/services/saved-search.service';
import { SearchService } from 'src/app/core/services/search.service';
import { DashboardWidgetsPopupComponent } from '../dashboard-widgets-popup/dashboard-widgets-popup.component';
import { SelectSearchPopupComponent } from '../select-search-popup/select-search-popup.component';
import { SpinnerService } from 'src/app/core/services/spinner.service';
@Component({
  selector: 'iv-competitive-dashboard',
  templateUrl: './competitive-dashboard.component.html',
  styleUrls: ['./competitive-dashboard.component.css']
})
export class CompetitiveDashboardComponent implements OnInit {

  
comp_items = []


values: string ="";
widgetName = [
  "2_ArticleSentiment/ArticleSentiment"
];

[x: string]: any;

userName: any;
showContainer =false;

savedSearch :any;
savedQuery: any;


widgets: Array<any> = [];


// @Input()
currentSearchID: string = "";

// @Input()
currentUserName: string = "";

// @Input()
currentUserID: string = "";

options: VizCreateOptions = {
  hideTabs: true,
  hideToolbar: true,
  disableUrlActionsPopups: true,
  toolbarPosition: ToolbarPosition.TOP,
  height: "500px",
  width:  "745px"
  
  // width: (screen.width - 160) / 2 + "px"
};



constructor(private bottomSheet: MatDialog,private savedSearchService: SavedSearchService,private httpService: HttpService, //private dashboard: DashboardSidebarComponent,
  private authService: AuthService,
  private http: HttpClient,
  private searchService: SearchService, 
  private spinner: SpinnerService
   ) { }

openBottomSheet(): void{
  this.bottomSheet.open(DashboardWidgetsPopupComponent, {
   minWidth: '1519px',
   height: '80vh',
   position:{
    bottom: '0'
   }
  });
}

openSelectSearch(): void{
  const dialogRef=    this.bottomSheet.open(SelectSearchPopupComponent,{
    width:'680px', //680
    height:"560px", //560,
    position:{
      bottom: '20px'
    }
  })
  dialogRef.afterClosed().subscribe(response =>{
    this.savedSearch= response;
  })
}

ngOnInit(): void {

 

this.authService.UserSession.subscribe((session) => {
  this.currentUserName= session.email
  this.currentUserID = session.id
  // console.log("Name:",this.currentUserName);

})

// this.savedSearchService.getSavedSearch().subscribe(response =>{
//   this.currentSearchID = response.id
// })


}

urlGet() {
this.widgets = [];
this.searchService
  .retriveToken1();
this.searchService.widgets1.subscribe(t => {
  this.widgets = t;
  console.log(this.widgets)
this.spinner.stop();
});

}

dashboardFilters(){


return {
  ':refresh': 'y',
  ':si':this.currentSearchID,
  'si':this.currentSearchID,
  ':ui':this.currentUserID,
  'ui':this.currentUserID ,
  ':un':this.currentUserName,
  'un':this.currentUserName  };

}




getUserFormData() {
  this.spinner.start();
  let USID = this.savedSearch.id;
  console.log(USID);
  if(!this.values){
    alert("Please enter the Competition Keywords")
    return;
  }
  const valuesArray = this.values.split(',');
  this.http.post(`http://54.153.77.41/dashboard/dashboard/competitive/${this.savedSearch.id}?email=${this.currentUserName}`, valuesArray).subscribe((res)=>{
    console.log(res)
this.urlGet()

  })
}

}
