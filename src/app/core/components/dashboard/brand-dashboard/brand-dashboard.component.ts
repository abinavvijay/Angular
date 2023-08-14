import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { DashboardWidgetsPopupComponent } from '../dashboard-widgets-popup/dashboard-widgets-popup.component';
import { SelectSearchPopupComponent } from '../select-search-popup/select-search-popup.component';
import { SavedSearchService } from 'src/app/core/services/saved-search.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { VizCreateOptions, ToolbarPosition } from 'ngx-tableau';
import { SearchService } from 'src/app/core/services/search.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
//import { DashboardSidebarComponent } from '../dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'iv-brand-dashboard',
  templateUrl: './brand-dashboard.component.html',
  styleUrls: ['./brand-dashboard.component.css'],
})
export class BrandDashboardComponent implements OnInit {
  
  widgetName = [
    '1_VolumeAnalysis/VolumeAnalysis-Brand',
    '2_SentimentAnalysis/SentimentAnalysis-Brand',
    '3_SentimentOverTime/SentimentOverTime-Brand',
    '4_CoverageOverTime/CoverageOverTime-Brand',
    '5_MediaType/MediaType-Brand',
    '6_ReachOverTime/ReachOverTime-Brand',
  ];

  widcnst: any;
  [x: string]: any;
  showContainer = false;
  userName: any;

  savedSearch: any;
  savedQuery: any;

  widgets: Array<any> = [];

  // @Input()
  currentSearchID: string = '';

  // @Input()
  currentUserName: string = '';

  // @Input()
  currentUserID: string = '';

  options: VizCreateOptions = {
    hideTabs: true,
    hideToolbar: true,
    disableUrlActionsPopups: true,
    toolbarPosition: ToolbarPosition.TOP,
    height: '500px',
    // width: '755px',

    width: (screen.width - 160) / 2 + "px"
  };

  constructor(
    private bottomSheet: MatDialog,
    private savedSearchService: SavedSearchService,
    private httpService: HttpService, //private dashboard: DashboardSidebarComponent,
    private authService: AuthService,
    private http: HttpClient,
    private searchService: SearchService,
    private spinner: SpinnerService
  ) {}

  openBottomSheet(): void {
    this.bottomSheet.open(DashboardWidgetsPopupComponent, {
      minWidth: '1519px',
      height: '80vh',
      position: {
        bottom: '0',
      },
    });
  }

  openSelectSearch(): void {
    const dialogRef = this.bottomSheet.open(SelectSearchPopupComponent, {
      width: '680px', //680
      height: '560px', //560,
      position: {
        bottom: '20px',
      },
    });
    dialogRef.afterClosed().subscribe((response) => {
      this.savedSearch = response;
      
    });
  }

  ngOnInit(): void {
    

    this.authService.UserSession.subscribe((session) => {
      this.currentUserName = session.email;
      this.currentUserID = session.id;
      
    });

    // this.savedSearchService.getSavedSearch().subscribe(response =>{
    //   this.currentSearchID = response.id
    // })
  }

  urlGet() {
    this.widgets = [];
    this.searchService.retriveToken1();
    this.searchService.widgets1.subscribe((t) => {
      this.widgets = t;
      console.log(this.widgets);
      this.spinner.stop();

    });

  }

  dashboardFilters() {
    return {
      ':refresh': 'y',
      ':si': this.currentSearchID,
      si: this.currentSearchID,
      ':ui': this.currentUserID,
      ui: this.currentUserID,
      ':un': this.currentUserName,
      un: this.currentUserName,
    };
  }

  // getUserForm(){
  //   this.getUserFormData();
  //   this.showContainer = true;
  // }

  getUserFormData() {
    this.spinner.start();

    let USID = this.savedSearch.id;

    console.log(USID);
    this.http
      .post(`http://54.153.77.41/dashboard/brand/${USID}?email=${this.currentUserName}`, USID)
      .subscribe((res) => {
        this.urlGet();
        
        console.log(res);
      });

  }
}
