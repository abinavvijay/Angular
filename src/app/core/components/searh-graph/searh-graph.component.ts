import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, } from 'ng2-charts';

import { default as Annotation } from 'chartjs-plugin-annotation';
import html2canvas from 'html2canvas';

@Component({
  selector: 'iv-searh-graph',
  templateUrl: './searh-graph.component.html',
  styleUrls: ['./searh-graph.component.css']
})
export class SearhGraphComponent implements OnInit {
  @ViewChild('graph') graph: any;

  @Input()

  set data(value: any) {

    this.lineChartData.datasets[0].data = value.counts; //this.to7SumRange(value.counts);
    this.lineChartData.labels = value.dates; //this.to7DateRange(value.dates);
    // this.barChartData.datasets[0].data = value.counts; //this.to7SumRange(value.counts);
    // this.barChartData.labels = value.dates; //this.to7DateRange(value.dates);
    
    this.chart?.update();

  }


  to7DateRange(data: Array<any>): Array<any> {
    let arr: Array<any> = [];
    let length = 0;
    while (length < data.length) {
      arr.push(data[length]);
      length = (length + 7) ;
      if (length > data.length)
        arr.push(data[data.length - 1]);
    }

    return arr;

  }


  to7SumRange(data: Array<any>): Array<any> {
    let arr: Array<any> = [];
    let length = 0;
    let count=0;
    for(let i=0;i<=Math.ceil(data.length/7);i++){

      let sum=0;
      for(let j=length;j<length+7;j++){
        count++;
        sum+= data[j]?data[j]:0;
        
      }
      length=count;
      arr.push(sum);
      console.log(count);
    }
    return arr;

  }




  public lineChartData: ChartConfiguration["data"] = {
    datasets: [

      {
        data: [],
        label: 'Trendline',
        yAxisID: 'y-axis-1',
        backgroundColor: ['', '#ffffff'],
        borderColor: '#d62884',
        pointBackgroundColor: '#d62884aa',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,0,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [],
  }
    ;
  public lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderStyle:'dashed'
    },
  ];

  



  constructor() {
    Chart.register(Annotation)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const gradient = this.graph.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 300);

    gradient.addColorStop(0, '#d62884');

    gradient.addColorStop(1, 'rgba(255, 255, 255,.8)');

    this.lineChartData.datasets[0].backgroundColor = gradient;
    this.chart?.update();

  }



  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
       plugins: {
      legend: { display: false },

    }
  };

  public lineChartType: ChartType = 'line';
  public barChartType : ChartType ='bar'
  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

 
  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  
  
  //// FOR REF  this.chart?.update();

  changetoBar(){
    this.lineChartType ='bar'
  }
  changetoLine(){
    this.lineChartType ='line'
  }

  
  @ViewChild('dgraph', {static: false}) ell!: ElementRef<HTMLImageElement>


  downloadpng1(){
    
    html2canvas(this.ell.nativeElement).then((canvas) =>{
      const image = canvas.toDataURL();
  
      const tmpLink = document.createElement('a')
      tmpLink.download = 'image.png';
      tmpLink.href =   image; 
      document.body.appendChild( tmpLink );  
      tmpLink.click();  
      document.body.removeChild( tmpLink ); 
    })
  
  }

 
}
