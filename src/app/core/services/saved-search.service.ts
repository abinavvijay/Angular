import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

// Select All options
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedSearchService  {



  savedSearch: any;
  userId : any;

  private savedSearch_Url ='http://54.153.77.41/newsletter/all_saved_search/'


  constructor(private http: HttpClient,
              private authService: AuthService,) {}


  getSavedSearch(){
     // By using authservice getting userId and that was passed
     this.authService.UserSession.subscribe(session =>{
      this.userId = session.email
      console.log("UserId:", this.userId);

    })
    return  this.http.get<any>(this.savedSearch_Url+`${this.userId}`)
  }


}
