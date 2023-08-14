import { ResultInFigureService } from './../../services/result-in-figure.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFiltersPipe } from '../../components/filters/search-filters.pipe';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';
import { SpinnerService } from '../../services/spinner.service';
import { SelectSearchPopupComponent } from '../../components/dashboard/select-search-popup/select-search-popup.component';
import  html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'iv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@ViewChild('resultfig', {static: false}) el!: ElementRef

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchSerivce: SearchService,
    private spinner: SpinnerService,
    private filterPipe: SearchFiltersPipe,
    private remoteService: HttpService,
    private authService: AuthService,
    private router:Router,
    private http: HttpClient,
    private res : ResultInFigureService,
    private bottomSheet: MatDialog,
    private renderer: Renderer2
  ) {


  }
  source: any = undefined;
  tokens: Array<any> = [];
  showSaveSearchDialouge: boolean = false;
  filteredSource: any = undefined;
  selectedFilters: any = {};
  filters: any = {};
  retriveAttempts: number = 1;
  noData: boolean = false;
  timerHandler: any;
  totalArticles: number = 0;
  totalReach: number = 0;
  totalAve: number = 0;
  url: any = undefined;
  query: any = undefined;
  currentSearchID = "";
  currentPage: any = 1;
  isResultAvailable: boolean = false;
  routeParams: any;
  currentSort: any = '';
  session!:any
  currentTab:any="All Results";

  resultval: any;
  totalChanges: any
  reachChanges: any
  aveChanges: any
  value1: boolean =false;
  value2: boolean =false;
  value3: boolean =false;
  ngOnInit(): void {

    this.authService
      .UserSession
      .subscribe(session => {

        if (session) {
          this.session=session;
          this.activatedRoute.params.subscribe((t: any) => {
            this.routeParams = t;
            if (t.id) {
              this.isResultAvailable = true;
              this.fetchSearch(t);
              this.currentSearchID = t.id;
            }
            else {
              this.spinner.stop();
              this.currentSearchID = "";
              this.isResultAvailable = false;
            }
          });


        }else{
          this.router.navigate(["/login"]);
        }

      })

  }

  fetchSearch(searchParams: any, filters?: any, sort?: any) {
    this.spinner.start();
    this.searchSerivce.retriveSearch(searchParams.id, searchParams.mode, filters, sort).subscribe(t => {
      this.query = t.data.query;
      if (t.data.query.retrivalState == 1) {
        if (t.data.items.length > 0) {
          this.source = t;
          this.filteredSource = this.source;//this.filterPipe.transform(JSON.parse(JSON.stringify(this.source)), this.selectedFilters);
          this.getresult(searchParams.id)
          
          this.generateFilters(t.data.filters);
        }
        else {
          this.noData = true;
        }
        this.spinner.stop();
      }
      else if (t.data.query.retrivalState == 2) {
        this.noData = true;
        this.spinner.stop(true);
      }
      else {
        console.log(searchParams.id, this.retriveAttempts);
        if (searchParams.id && this.retriveAttempts < 100) {
          this.retriveAttempts++;
          this.timerHandler = setTimeout(() => {
            this.fetchSearch(searchParams);
          }, 10000 * this.retriveAttempts);
        }
        else {
          this.spinner.stop();
          this.noData = true;
        }



      }
    });
  }

  selectedOptions(values: any) {
    let val = values as { id: any, value: Array<string> };
    this.selectedFilters[val.id] = val.value;
    this.currentPage = 1;
    this.fetchSearch(this.routeParams, this.selectedFilters);


    //this.filteredSource = this.filterPipe.transform(JSON.parse(JSON.stringify(this.source)), this.selectedFilters);

  }



  private generateFilters(filters: any) {

    let keys = Object.keys(filters);
    for (let i = 0; i < keys.length; i++) {
      let arr: Array<any> = [];
      for (let j = 0; j < filters[keys[i]].length; j++) {
        arr.push({ "text": filters[keys[i]][j] });
      }
      this.filters[keys[i]] = arr;

    }
    this.filters['location'] = [{ "text": 'USA' }]
    console.log(this.filters);
  }

  onPageChange(value: any) {
    
    this.currentPage = value;
    console.log(value);
    this.searchSerivce.retrieveMoreSearchData(value, this.routeParams.id, this.routeParams.mode, this.selectedFilters, this.currentSort).subscribe(t => {
      if (t) {
        this.filteredSource = this.source = t;
        //this.currentPage = 1;
      }
    });
  }

  download(): void {
    this.spinner.start();
    this.searchSerivce
      .download(this.routeParams.id)
      .subscribe((blob: any) => {
        console.log(blob);
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'result.csv';
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.spinner.stop();
      })
  }

  onSort(value: string) {
    this.currentSort = value;
    this.currentPage = 1;
    this.fetchSearch(this.routeParams, this.selectedFilters, this.currentSort);
    console.log(value, "from Search COmponent page")
  }


  openSelectSearch(): void{
    this.bottomSheet.open(SelectSearchPopupComponent,{
      width:'680px',
      height:"560px",
      position:{
        bottom: '30px'
      }
    })
  }

getresult(sid: any){
this.res.getData(sid).subscribe(response =>{
  console.log(response)
  this.resultval = response;
  this.totalChanges = this.resultval.total_c
  this.reachChanges = this.resultval.reach_c
  this.aveChanges = this.resultval.ave_c
if(this.totalChanges>=0){
  this.value1=true
 }

 if(this.reachChanges>=0){
  this.value2=true
 }
 if(this.aveChanges>=0){
  this.value3=true
 }

})
}

downloadpng(){
  html2canvas(this.el.nativeElement).then((canvas) =>{
    const image = canvas.toDataURL();

    const tmpLink = document.createElement('a')
    tmpLink.download = 'image.png';
    tmpLink.href =   image; 
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink ); 
  })

}

convertToPNG() {
  const html = this.el.nativeElement;
  const canvas = document.createElement('canvas');
  canvas.width = html.offsetWidth;
  canvas.height = html.offsetHeight;

  const ctx = canvas.getContext('2d');
  ctx?.drawImage(html, 0, 0, canvas.width, canvas.height)
  const data = `
    data:image/png
    ${canvas.toDataURL('image/png')}
  `;
  const img = new Image();
  img.src = data;

  this.renderer.appendChild(html, img);
  
  const link = document.createElement('a');
    link.download = 'image.png';
    link.href = img.src;
    link.click();
}


}
