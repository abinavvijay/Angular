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
  selector: 'iv-industry-dashboard',
  templateUrl: './industry-dashboard.component.html',
  styleUrls: ['./industry-dashboard.component.css'],
})
export class IndustryDashboardComponent implements OnInit {
  widgetName = [
    '1_VolumeAnalysis_industry/vai',
    '2_SentimentAnalysis_industry/si',
    '3_CoveragebyJournalist_industry/cbji',
    '4_CoveragebySource_industry/cbsi',
    '5_CompaniesMentioned_industry/Companiesmentioned_Industry',
    '6_CoverageOverTime_industry/coverageovertime_industry',
    '7_Coveragebytoppublications_industry/coveragebytoppublications_industry',
  ];

  [x: string]: any;

  userName: any;
  showContainer = false;

  savedSearch: any;
  savedQuery: any;

  widgets: Array<any> = [];
  // savedSearch :Array<any>=[];

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
    // width: '745px',

    width: (screen.width - 160) / 2 + "px"
  };

  constructor(
    private bottomSheet: MatDialog,
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
      // console.log("Name:",this.currentUserName);
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

  getUserFormData() {
    this.spinner.start();
    let USID = this.savedSearch.id;
    console.log(USID);
    this.http
      .post(
        `http://54.153.77.41/dashboard/industry/${USID}?email=${this.currentUserName}`, USID)
      .subscribe((res) => {
        console.log(res);
        this.urlGet();
      this.spinner.stop();

      });
  }
}
