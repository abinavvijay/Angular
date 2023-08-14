import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserSession: BehaviorSubject<any> = new BehaviorSubject(undefined);
  baseURL: string = environment.config.apiUrl;
  constructor(private remoteService: HttpService, private storageService: StorageService) {

    this.UserSession.next(this.IsLoggedIn);

  }

  public get IsLoggedIn(): any {
    let currrentUser = this.storageService.fetchObject("auth");
    if (currrentUser && currrentUser.id)
      return currrentUser;
    return undefined;

  }

  public Login(user: string, password: string) {

    return this
      .remoteService
      .get<any>(this.baseURL + `api/Auth/login/${user}/${password}`)
      .pipe(map(response => {
        if (response.isSuccess) {
          this.storageService.storeObjectStrong("auth", response.data);
          this.UserSession.next(this.IsLoggedIn);
          return response;
        }
        return undefined;

      }));


  }

  public Logout() {
    this.storageService.delete("auth");
    this.UserSession.next(undefined);
  }








}
