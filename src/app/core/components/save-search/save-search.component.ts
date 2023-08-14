import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'iv-save-search',
  templateUrl: './save-search.component.html',
  styleUrls: ['./save-search.component.css']
})
export class SaveSearchComponent implements OnInit {


  _show: boolean = false;
  _searchId: string = "";
  ifSpinner:boolean=false;

  @Input()
  public set Show(val: boolean) {
    this._show = val;
  }

  public get Show() {
    return this._show;
  }

  @Input()
  public set SearchID(val: string) {
    this._searchId = val;
  }

  public get SearchID() {
    return this._searchId;
  }



  @Output()
  ShowChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private searchService: SearchService, private spinner: SpinnerService, private router: Router) {

    this.form = fb.group({

      name: ['', [Validators.required]],
      description: ['']
    })

  }



  get f() {

    return this.form.controls;

  }

  CancelForm() {

    this.form.reset({});
    this.Show = !this.Show;
    this.ShowChange.emit(this.Show);

  }



  submit() {
    this.spinner.start();
    this.ifSpinner=true;
    var data = {
      name: this.form.value.name,
      description: this.form.value.description,
      id: this.SearchID
    };

    console.log(data);

    this
      .searchService
      .SaveSearch(data)
      .subscribe(t => {

        console.log(t);
        this.spinner.stop();
        this.ifSpinner=false;
        alert('Search Query have been saved for this')
     this.Show = !this.Show;


      });

    console.log(this.form.value);

  }

  ngOnInit(): void {
  }

}


