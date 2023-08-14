import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { of } from 'rxjs/internal/observable/of';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  userMailId : any;
  savedSearchId : any =''

  newsletterBaseUrl :any="http://54.153.77.41/newsletter/"
  // postCreateNewsLetter: any = "http://54.153.77.41/newsletter/"
  // http://54.153.77.41/newsletter/nitin.shekhar%40infovision.com
  constructor(private remoteService: HttpService,
     private storageService: StorageService,
      private authService : AuthService,
      private savedSearchService: SearchService,
      private http: HttpClient) { }

  retriveNewsletter(uuid: string){
    this.authService.UserSession.subscribe(userId =>{
      this.savedSearchId = uuid;
      this.userMailId = userId.email
      console.log(this.userMailId,"For user Newsletters");
      console.log(uuid);
    });
return  this.remoteService.get<any>(this.newsletterBaseUrl+`result/{user_search_identifier,user_email}?user_search_identifier=${uuid}&user_email=${this.userMailId}`)
  }

  onCreateNewsLetter(body: any){
    console.log(body);
    return this.remoteService.post<any>(this.savedSearchId, this.newsletterBaseUrl+`${body.search_id}?recipient=${body.recipient}&send_on=${body.send_on}&published_as=${body.published_as}&send_time=${body.send_time}&title=${body.title}&description=${body.description}&opening_title=${body.opening_title}&name=${body.name}`)

  }

  //


  retriveCreateNewsLetter(){
    this.authService.UserSession.subscribe(userId =>{
    this.userMailId=  userId.email
    })
    return this.remoteService.get<any>(this.newsletterBaseUrl+ `all_newsletter/${this.userMailId}`)

  }

  deleteCreateNewsLetter(searchId: any){
      return this.http.delete<any>(this.newsletterBaseUrl+`${searchId}`)
  }


}


