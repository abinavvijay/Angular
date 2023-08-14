import { ResultInFigureService } from './../../services/result-in-figure.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SearchService } from '../../services/search.service';
import { ToolbarPosition, VizCreateOptions } from 'ngx-tableau';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';
@Component({
  selector: 'iv-searh-result',
  templateUrl: './searh-result.component.html',
  styleUrls: ['./searh-result.component.css']
})
export class SearhResultComponent implements OnInit {

  constructor(private remoteService: HttpService, private sanitizer: DomSanitizer, private searchService: SearchService, private http: HttpClient, private res: ResultInFigureService, private route: Router, private spinner: SpinnerService ) {
  }
  resultval: any;
  posChanges: any
  neuChanges: any
  negChanges: any
  value1 : boolean = false;
  value2 : boolean = false;
  value3 : boolean = false;

  public DomS!: DomSanitizer;
  public _source!: any;
  options: VizCreateOptions = {
    hideTabs: true,
    hideToolbar: true,
    disableUrlActionsPopups: true,
    toolbarPosition: ToolbarPosition.TOP,
    height: "500px",
    width: (screen.width - 160) / 2 + "px"
  };

  pages: number = 0;

  selectedAll: boolean = false;

  @Input()
  currentPage: number = 1;

  @Input()
  currentSearchID: string = "";

  @Input()
  currentUserName: string = "";

  @Input()
  currentUserID: string = "";

  @Input()
  top5Ave!: Array<any>  ;

  @Input()
  top5Reach!: Array<any>  ;

  @Output()
  currentPageChange: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDownload: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDownload1: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onTabChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() onSortingChange: EventEmitter<string> = new EventEmitter<string>();

  currentTab: string = "All Results";
  widgets: Array<any> = [];
  url: any = "";
  filters: any = { refresh: 'y' };
  @Input()
  public set source(value: any) {
    console.log("dasasdasdas");
    this._source = value;
    this.pages = Math.ceil(value.data.query.totalRecords / 10);

  }

  @Input() public sentimentSummary!:any;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // this.ngOnInit();

  }
  ngOnChanges() {
  }
  ngOnChanges1() {
    console.log("dsdsds");
    this.onTabChange.emit(this.currentTab);
    if (this.currentTab == "Dashboard View") {
      this.urlGet();
      this.getresult(this.currentSearchID)

    }
    else if (this.currentTab == "All Results") {
      console.log(this.currentTab);
    }
  }

  urlGet() {
    this.widgets = [];
    this.searchService
      .retriveToken();
    this.searchService.widgets.subscribe(t => {
      this.widgets = t;
      console.log(this.widgets)
    });

  }

  onPageChange(value: any) {
    console.log(value,"dsdsdsd");
    this.currentPageChange.emit(value);
  }

  download() {

    this.onDownload.emit(true);

  }

  onSort(value:string){
    this.onSortingChange.emit(value);
  }

  getresult(sid: any){
    this.res.getData(sid).subscribe(response =>{
      console.log(response)
      this.resultval = response;
      this.posChanges = this.resultval.pos_c
      this.neuChanges = this.resultval.neu_c
      this.negChanges = this.resultval.neg_c
    
    
      if(this.posChanges>=0){
       this.value1=true
      }
      else{
        this.value1=false
      }
      if(this.negChanges>=0){
        this.value2=true
       }
      if(this.neuChanges>=0){
       this.value3=true
      }
      
    })
     
      
    }

    downloadTop5(): void {
      this.spinner.start();
      this.searchService
        .downloadTop5(this.currentSearchID)
        .subscribe((blob: any) => {
          console.log(blob);
          const a = document.createElement('a')
          const objectUrl = URL.createObjectURL(blob)
          a.href = objectUrl
          a.download = 'topresult.csv';
          a.click();
          URL.revokeObjectURL(objectUrl);
          this.spinner.stop();
        })
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

  newsletter(){
    if(this.currentTab==='Create Newsletter'){
      this.route.navigateByUrl('newsletter/createnew')
    }else if(this.currentTab==='Create New Dashboard'){
      // this.route.navigateByUrl('')
     this.route.navigateByUrl('dashboard')

    }
  }

  onSelectAll(event: any){
    console.log(event);

    this.selectedAll = event
  }

   onSelectionChanged(selected: any) {
    // update the value of selectedAll based on the value of selected
    // For example: if not all items are selected, then set selectedAll to false
    if (!selected) {
      this.selectedAll = false;
    }
  }

}
