import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'iv-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  @Input()
  title!:any;

  @Input()
  items!:Array<any>;

  @Input()
  currentSearchID = " "

  @Output()
  onDownload1: EventEmitter<any> = new EventEmitter<any>();


  setDefaultImage(event:any){
    event.target.src='./assets/images/noimage.png';
    
      }

      downloadTop5(){
        this.onDownload1.emit(this)
      }

}
