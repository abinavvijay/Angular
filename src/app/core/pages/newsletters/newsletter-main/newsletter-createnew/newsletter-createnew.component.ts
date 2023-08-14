import { RecipientsInputComponent } from './../../../../components/newsletters/recipients-input/recipients-input.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterDatePickerComponent } from './../../../../components/newsletters/newsletter-date-picker/newsletter-date-picker.component';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectSearchPopupComponent } from '../../../../components/dashboard/select-search-popup/select-search-popup.component';
// import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NewsletterService } from 'src/app/core/services/newsletter.service';
import { SpinnerService } from './../../../../services/spinner.service';
import { SaveNewsLetterComponent } from 'src/app/core/components/newsletters/save-news-letter/save-news-letter.component';

@Component({
  selector: 'iv-newsletter-createnew',
  templateUrl: './newsletter-createnew.component.html',
  styleUrls: ['./newsletter-createnew.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsletterCreatenewComponent implements OnInit {
  [x: string]: any;
  //selectedTeam = '';
  // public days: Object[] = [
  //   { Id: 'day1', Game: 'Mon' },
  //   { Id: 'day2', Game: 'Tue' },
  //   { Id: 'day3', Game: 'Wed' },
  //   { Id: 'day4', Game: 'Thu' },
  //   { Id: 'day5', Game: 'Fri' },
  //   { Id: 'day6', Game: 'Sat' },
  //   { Id: 'day7', Game: 'Sun' },
  //   { Id: 'day8', Game: 'Weekdays' },
  // ];
  // public box: string = 'Box';
  // public default: string = 'Default';

  // public fields: Object = { text: 'Game', value: 'Id' };
  // public waterMark: string = 'Days';
  dropdownList: any;
  newsLetterResponse: any;
  select: any;
  savedSearchId: string ='';
  currentPage: any = 1;
  currentSort: any = '';
  // For recipents
  inputRecipents : boolean= false;
  emailList: string[] = [];
  newEmail: string ='';
// For Send On
  inputSendOn: boolean = false;
  Days : string[] =[];
  outPutfromChild = {value:'', closeSendOn:false}

  // For Send Time
  inputSendTime: boolean = false;
  inputTime: boolean = false;
  // selectedHour!: number;
  // selectedMinute!: number;
  // selectedAMPM: string = 'AM';
  displayTime: any ={};
  hours = Array.from({ length: 12 }, (_, i) => i + 1);
minutes = Array.from({ length: 60 }, (_, i) => ('0' +i).slice(-2));

// NewsLetter title
newsTitle: string ='';
newsDescription = '';
// OpeningInput title
openingTitle: any;
// Save newsletter Data
newsLetterName: string ='';
// for save newsletter
showSaveNewsletterDialouge: boolean = false


  @ViewChild(NewsletterDatePickerComponent)
  dayPicker: NewsletterDatePickerComponent = new NewsletterDatePickerComponent;

  constructor(private bottomSheet: MatDialog,
     private newsLetterService: NewsletterService,
      private spinner: SpinnerService,
      private fb: FormBuilder,
      private router: Router) {}


  openInputRecipients():void{
   const diaLogInput= this.bottomSheet.open(RecipientsInputComponent,
     {
      width:"680px",
      height:'auto',
      data: {emailList: this.emailList}//Pass cuurent List of email address
    }
    )
    diaLogInput.afterClosed().subscribe(inputEmail =>{
      console.log(inputEmail);
      if(inputEmail){
      this.emailList = inputEmail;
      console.log(this.emailList);
      }
    })
  }

  openSelectSearch(): void{
   const  dialogRef = this.bottomSheet.open(SelectSearchPopupComponent,{
      width:'680px',
      height:"560px",
      position:{
        bottom: '20px'
      }
    })

    dialogRef.afterClosed().subscribe(uuid =>{
      console.log(uuid);
      if(uuid){
      this.savedSearches(uuid)
    }
    })
  }

  openSaveNewsLetter(){
    const  dialogRef= this.bottomSheet.open(SaveNewsLetterComponent,{
      width: '680px',
      height: "200px"
    })

    dialogRef.afterClosed().subscribe((newsName: string)=>{
      this.newsLetterName = newsName;
      console.log(newsName);

      if(newsName&&this.savedSearchId&&this.emailList&&this.Days&&this.displayTime.Time&& this.newsTitle&& this.newsDescription){
        this.saveCreateNewsletter(newsName);
        alert("NewsLetter have been created, the data will reflect in the main page of NewsLetter")
      }else{
        alert("All fields are required")
      }
    })


  }



  ngOnInit(): void {
    // this.dropdownList= [
    //   {item_id: 1, item_text: 'Mon'},
    //   {item_id: 2, item_text: 'Tues'},
    //   {item_id: 3, item_text: 'Wed'},
    //   {item_id: 4, item_text: 'Thurs'},
    //   {item_id: 5, item_text: 'Fri'},
    //   {item_id: 6, item_text: 'Sat'},
    //   {item_id: 7, item_text: 'Sun'},
    // ];
    // this.dropdownSettings ={
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Daily',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    // }
  }




  // Popup save search
  savedSearches(uuid: { id: string; savedas: any; }){
    this.spinner.start()
      this.newsLetterService.retriveNewsletter(uuid.id).subscribe((response: any) =>{
        this.spinner.stop()

        if(response.status_code==200){
          this.newsLetterResponse = response.result;
          console.log(this.newsLetterResponse);
          this.select = uuid.savedas;
          this.savedSearchId = uuid.id;
        }else{
          console.warn(response.status_code);

        }
      })
  }


  //Send Time
  formatTime(){
    let hour = this.displayTime.hour;
    let minute = this.displayTime.minute.toString().padStart(2, '00');
    let ampm = this.displayTime.ampm;

    if(hour === 12){
      hour = 0;
    }
    if(ampm === "PM"){
     hour ;
    }
    this.inputTime = true;
    this.inputSendTime=false;
    return `${hour}:${minute} ${ampm}`
  }

  openDayPicker(){
    this.inputSendOn= !this.inputSendOn;
    if(this.inputSendOn == true){
      this.inputSendTime = false;
    }
  }
  // Input Time
  OnChangeDay(value: any ){
    this.outPutfromChild = value
    this.Days = [];
    for(let i=0; i<this.outPutfromChild.value.length; i++){
      if(this.outPutfromChild.value[i]){
        this.Days.push(this.dayPicker.days[i])
      }
      this.inputSendOn= !this.outPutfromChild.closeSendOn;
    }
    // this.openDayPicker()
    console.log(this.inputSendOn);


  }

  openSendTime(){
    this.inputSendTime =! this.inputSendTime;
    if(this.inputSendTime == true){
      this.inputSendOn = false;
    }
  }

  // NewsTitle and Description
  OnNewsLetterTitle(data:{newsTitle: string, newsDescription: string}){
    this.newsTitle = data.newsTitle;
    this.newsDescription = data.newsDescription;
    console.log(data);

  }

  // OpeningInput title
  onInputChanged(value:string){
    this.openingTitle = value
    console.log(value);

  }

  // Post Create Newsletter

  saveCreateNewsletter(newsName: string){
    const body ={
      search_id : this.savedSearchId,
      recipient: this.emailList.toString(),
      send_on: this.Days.toString(),
      published_as: "HTML",
      send_time: this.displayTime.time,
      title: this.newsTitle,
      description: this.newsDescription,
      opening_title: this.openingTitle,
      name: newsName
    }
    console.log(body);
    this.spinner.start();
    this.newsLetterService.onCreateNewsLetter(body).subscribe((response: any) => {
      console.log(response);
      this.spinner.stop()
    },
    error =>{
      console.error(error);

    })
  }

}
