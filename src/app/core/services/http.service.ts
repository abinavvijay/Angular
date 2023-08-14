import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {





  constructor(private httpClient: HttpClient) { }

  

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  post<T>(obj: T, url: string): Observable<T> {
    return this.httpClient.post<T>(url, JSON.stringify(obj))
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }): Observable<never> {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(() => new Error(msg));
  }



  tableauToken(url:string) {
    return this.httpClient.get(url)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }
  tableauToken1(url:string) {
    return this.httpClient.get(url)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }


  download(url: string): Observable<Blob> {
    return this.httpClient.get(url, {
      responseType: 'blob'
    })
  }

}

