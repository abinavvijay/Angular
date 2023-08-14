import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'iv-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private searchService: SearchService, private spinner: SpinnerService, private router:Router) {

    this.form = fb.group({

      keyword: ['', [Validators.required]]
    })

  }



  get f() {

    return this.form.controls;

  }



  submit() {
    this.spinner.start()
    this
      .searchService
      .createSearch({ query: this.form.value.keyword, type: 0 })
      .subscribe(t => {
        if (t.isSuccess) {
          this.router.navigate(["/search/for","fresh",t.data.id]);
        }
      });

    console.log(this.form.value.keyword);

  }

  ngOnInit(): void {
  }

}
