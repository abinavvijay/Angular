import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    const user = this.authService.IsLoggedIn;
    return request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'x-iv-auth-token': user ? user.id : '',
        'x-iv-auth-user': user ? user.email : ''
      })
    });
  }
}
