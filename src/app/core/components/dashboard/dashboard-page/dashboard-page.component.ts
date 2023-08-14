import { Component, OnInit } from '@angular/core';
import { sideBar } from '../dashboard-models/dashboard-sidebar.model';
@Component({
  selector: 'iv-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor() { }


  titles : sideBar[] =[
    new sideBar("../../../../assets/Icons/24x24/ChartSample.png","Brand",'','','/new-dasboard/brand-dashboard'),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','Competitive',' ', '', '/new-dasboard/competitive-dashboard' ),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','Industry',' ', '', '/new-dasboard/industry-dashboard' ),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','People',' ', '', '/new-dasboard/people-dashboard' ),
  ]



  ngOnInit(): void {
  }

}
