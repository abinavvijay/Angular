import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'iv-newsletter-date-picker',
  templateUrl: './newsletter-date-picker.component.html',
  styleUrls: ['./newsletter-date-picker.component.css']
})
export class NewsletterDatePickerComponent implements OnInit {

  radioActive: boolean = false;
  @Input()
  selectedDays: boolean[] =[];
  // declare  Array: any;

  daysControl = new FormControl();
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  active : any ={};
  @Output() submitDays = new EventEmitter<{value: string[], closeSendOn: boolean}>();
  // @Output() closeSendOn = new EventEmitter<boolean>();
  values=true;

  constructor(){
    for(let day of this.days){
      this.active[day]= false;
    }
  }

  ngOnInit(): void {
  }

  toggle(day: string){
    this.active[day] = !this.active[day];
  }

  toggleAll(){
    for(let day of this.days){
      if(this.active[day]===false){
        this.active[day]= this.active[day] + !this.active[day];

      }else if(this.active[day]===true){
        this.active[day]= this.active[day] + !this.active[day];

      }else if(this.active[day]){
        this.active[day]=!this.active[day];
      }
      }

  }

  submit(){
    let values = [];
    for(let day of this.days){
      values.push(this.active[day])
      // this.radioActive = PopUp;
    }

      this.submitDays.emit({value:values, closeSendOn: true});
      // this.closeSendOn.emit(false);
  }

}
