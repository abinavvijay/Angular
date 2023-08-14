import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SpinnerService } from '../../services/spinner.service';
@Component({
  selector: 'iv-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  set SearchCriteria(val: any) {
    this._searchQuery = val;
    console.log(val, "val");
    this.form = this.fb.group({

      keyword: [val?.queryPart1 != '' ? val?.queryPart1 : val?.text, [Validators.required]],
      include: [val?.queryPart2],
      exclude: [val?.queryPart3]
    });
    if (val)
      this.setButton(parseInt(val.type));
  };

  get SearchCriteria() {
    return this._searchQuery;
  }

  _searchQuery: any = {};
  buttonName = "Simple Search";
  form: FormGroup = new FormGroup({});
  type: number = 0;
  donotSubmit: boolean = true;
  constructor(private fb: FormBuilder, private searchService: SearchService, private spinner: SpinnerService, private router: Router) {

    this.form = this.fb.group({

      keyword: [this.SearchCriteria.queryPar1 != '' ? this.SearchCriteria.queryPar1 : this.SearchCriteria.text, [Validators.required]],
      include: [this.SearchCriteria.queryPar2],
      exclude: [this.SearchCriteria.queryPar3]
    })
  }

  get f() {
    return this.form.controls;
  }

  nosubmit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  submit() {
    console.log(this.type);
    this.spinner.start()
    let query = this.form.value.keyword;
    let data = { query: query, type: this.type };

    if (this.type == 1) {
      query = "((" + this.form.value.keyword + ") AND (" + this.form.value.include + ")) NOT (" + this.form.value.exclude + ")";
      data.query = query;
      data = Object.assign(data, { queryPart1: this.form.value.keyword, queryPart2: this.form.value.include, queryPart3: this.form.value.exclude })
    }
    this
      .searchService
      .createSearch(data)
      .subscribe(t => {
        if (t.isSuccess) {
          this.router.navigate(["/search/for", "fresh", t.data.id]);
        }
      });

    console.log(this.form.value.keyword);

  }

  ngOnInit(): void {
  }

  setButton(type: number) {

    this.type = type;

    switch (type) {
      case 0:
        this.buttonName = 'Simple Search';
        break;
      case 1:
        this.buttonName = 'Advance Search';
        break;
      case 2:
        this.buttonName = 'Pro Search';
        break;
    }





  }



}
