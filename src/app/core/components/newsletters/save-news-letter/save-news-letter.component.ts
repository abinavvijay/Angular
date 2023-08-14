import { SpinnerService } from './../../../services/spinner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'iv-save-news-letter',
  templateUrl: './save-news-letter.component.html',
  styleUrls: ['./save-news-letter.component.css']
})
export class SaveNewsLetterComponent implements OnInit {


  @Output() submitData: EventEmitter<any> =new EventEmitter();


  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private spinner: SpinnerService,
              private diaLogRef: MatDialogRef<SaveNewsLetterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

                this.form = fb.group({
                  name:['', [Validators.required]],
                })
               }

               get f(){
                return this.form.controls;
               }

  ngOnInit(): void {
  }
  submit(value: string){
    this.diaLogRef.close(value)
    console.log(value);
    this.submitData.emit(value)
  }

  CancelForm(){
    this.diaLogRef.close()
  }

}
