import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss']
})
export class ChartDataComponent implements OnInit {

  constructor(public data: DataServiceService) { }
  arrayData = this.data.weeklyWeather;

  ngOnInit(): void {
    console.log("ChartData")
    this.data.showData();
  }

}
