import { SpinnerService } from './../../../services/spinner.service';
import { NewsletterService } from 'src/app/core/services/newsletter.service';
import { HttpClient } from '@angular/common/http';
// import { ResultInFigService } from './../../../services/result-in-fig.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iv-newsletter-main',
  templateUrl: './newsletter-main.component.html',
  styleUrls: ['./newsletter-main.component.css']
})
export class NewsletterMainComponent implements OnInit {
  resultval: any;

  constructor(private createNewsLetterService : NewsletterService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.getCreateNewsLetters();
  }

  getCreateNewsLetters(){
    this.spinner.start()
    this.createNewsLetterService.retriveCreateNewsLetter().subscribe((createNewsletterData: any) =>{

      this.resultval = createNewsletterData.newsletter;
      this.spinner.stop()
    })
  }

  delete(search_id: any){
    console.log(search_id);
    this.spinner.start()
    this.createNewsLetterService.deleteCreateNewsLetter(search_id).subscribe(resp=> {
      console.log(resp);
      this.getCreateNewsLetters()
      this.spinner.stop()
    }
      )

  }




  }






