import { Component, OnInit, EventEmitter } from '@angular/core';
import { sideBar } from '../dashboard-models/dashboard-sidebar.model';
@Component({
  selector: 'iv-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  constructor() { };

  // PassingTitle = new EventEmitter<{titleName: string}>();

  sideBars: sideBar[]=[
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','Brand',' Ideal for generating Select standard template to Lorem Ipsum is simply dummy text', '6 Charts Included', '/new-dasboard/brand-dashboard' ),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','Competitive',' Ideal for generating Select standard template to Lorem Ipsum is simply dummy text', '6 Charts Included','/new-dasboard/competitive-dashboard' ),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','Industry',' Ideal for generating Select standard template to Lorem Ipsum is simply dummy text', '6 Charts Included','/new-dasboard/industry-dashboard' ),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','People',' Ideal for generating Select standard template to Lorem Ipsum is simply dummy text', '6 Charts Included', '/new-dasboard/people-dashboard' ),
    new sideBar('../../../../assets/Icons/24x24/ChartSample.png','Custom',' Ideal for generating Select standard template to Lorem Ipsum is simply dummy text', '6 Charts Included', '/new-dasboard/custom-dashboard' ),
  ]

  ngOnInit(): void {
  }

}
