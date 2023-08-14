import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
      private authService: AuthService,
      private http: HttpClient
    ) { }

    userMailId!: string;
  private savedSearch_Url ='http://54.153.77.41/notification/desktop/'


  private notificationStoreKey: string ="notification";

  baseURL: string = environment.config.apiUrl;

  // getNotification(id: string,): Observable<any>{

  // }

    getNotification(){
      this.authService.UserSession.subscribe(resp => {
        this.userMailId = resp.email
        console.log("remail:", resp.email);

      })
      return this.http.get<any>(this.savedSearch_Url + `${this.userMailId}`)
    }


}
