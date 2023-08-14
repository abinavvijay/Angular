import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ResultInFigureService {


  constructor(private http: HttpClient) { }

  getData(Uid :any) {
    console.log(Uid)
    return this.http.get(`http://54.153.77.41/notification/kpi/${Uid}`);
  }

  


}
