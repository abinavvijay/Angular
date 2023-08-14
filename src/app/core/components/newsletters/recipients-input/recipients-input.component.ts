import { Observable, startWith, map } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Input, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'iv-recipients-input',
  templateUrl: './recipients-input.component.html',
  styleUrls: ['./recipients-input.component.css']
})
export class RecipientsInputComponent implements OnInit {
  [x: string]: any;


  inputForm: boolean = false;

  emailList: string[] = [];
  prevEmail: string ='';
  emailControl = new FormControl();
  filteredEmails!: Observable<string[]>;
  separatorKeysCodes=[ENTER,COMMA];

  @Input()
  submittedData!: any;

  // @Input()
  // public set ShowForm(val: boolean){
  //   this.inputForm = val
  // }

  // public get ShowForm(){
  //   return this.inputForm
  // }


  @Output()
  ShowFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private diaLogRef: MatDialogRef<RecipientsInputComponent>,@Inject(MAT_DIALOG_DATA) public data: any  ) {
                this.emailList = data.emailList;
                this.filteredEmails = this.emailControl.valueChanges.pipe(
                  startWith(null),
              map((email:string | null) => email ? this.filter(email) : this['allEmails'].slice())
                ),
    // this.form = fb.group({
    //   inputRecipient: ['',[Validators.required,Validators.email]],
    // }),
    this.form =
    fb.group({
      inputRecipient: ['',[Validators.required,Validators.email]],
    })
    // new FormGroup({
    //   email: new FormControl(),
    // })
   }

   get f(){
    return this.form.controls;
   }

   addEmail(event: MatChipInputEvent):void{
    const input = event.input;
    const value = event.value;

    if(!this.emailList){
      this.emailList = [];
    }

    // add our email
    if ((value || '').trim()) {
      this.emailList.push(value.trim());
    }

    //reset the input value
    if(input){
      input.value ='';
    }
    this.emailControl.setValue(null);

   }

   removeEmail(email: string): void{
    const index = this.emailList.indexOf(email);

    if(index>=0){
      this.emailList.splice(index,1);
    }
   }

   filter(value: string): string[]{
    const filterValue = value.toLowerCase();

    return this['allEmails'].filter((email: any) => email.toLowerCase().indexOf(filterValue) === 0)
   }



   CancelForm(){
    // this.form.reset([])
    if(this.emailList=['']){
      // this.form.reset([])
     this.diaLogRef.close()

    }

   }


   submit(){
    // if(this.newEmail && this.newEmail.trim() !== ''){
    //   const emails = this.newEmail.split(',');
    //   for( const email of emails){
    //   const trimmedEmail = email.trim();
    //   if(trimmedEmail !== ''){
    //     if(this.emailList.indexOf(trimmedEmail) === -1){
    //     this.emailList.push(trimmedEmail)
    //     console.log(this.emailList);
    //   }
    //   }
    // }
    // var data={
    //   email: this.form.value.inputRecipient
    // }
    // // this.newEmail = ''
    // }
    // const updatedData = this.submittedData
    // this.prevEmail = this.emailList.join(', ');
    const emails = this.form.value.emailList;
    this.diaLogRef.close(this.emailList)

   }

  ngOnInit(): void {
    if(this.emailList){
    this.prevEmail= this.emailList.join(',')
  }
    }



}

