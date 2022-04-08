import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss']
})
export class ChartDataComponent implements OnInit {

  // @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(public data: DataServiceService) { }
  arrayData = this.data.weeklyWeather;

  // maxTempData: any = [];
  // minTempData: any = [];
  // avTempData: any = [];

  ngOnInit(): void {
    console.log("ChartData")
    this.data.showData();
  }

  // showData() {
  //   setTimeout(() => {
  //     for (let i = 0; i < this.data.weeklyWeather[0].daily.length; i++) {
  //       let maxTemp = this.data.weeklyWeather[0].daily[i].temp.max;
  //       let minTemp = this.data.weeklyWeather[0].daily[i].temp.min;
  //       let averageTemp = (maxTemp + minTemp) / 2;
  //       console.log('WEEKLY', averageTemp.toFixed(2));
  //       this.maxTempData.push(this.data.weeklyWeather[0].daily[i].temp.max);
  //       this.minTempData.push(this.data.weeklyWeather[0].daily[i].temp.min);
  //       this.avTempData.push(averageTemp.toFixed(2));
  //     }
  //     this.barChartData = {
  //       labels: ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  //       datasets: [
  //         {
  //           data: [this.maxTempData[0], this.maxTempData[1], this.maxTempData[2], this.maxTempData[3], this.maxTempData[4], this.maxTempData[5], this.maxTempData[6]], label: 'Höchstwert',
  //           // backgroundColor: 'blue',
  //           // borderColor: 'blue',
  //         },
  //         { data: [this.avTempData[0], this.avTempData[1], this.avTempData[2], this.avTempData[3], this.avTempData[4], this.avTempData[5], this.avTempData[6]], label: 'Durchschnittswert' },
  //         { data: [this.minTempData[0], this.minTempData[1], this.minTempData[2], this.minTempData[3], this.minTempData[4], this.minTempData[5], this.minTempData[6]], label: 'Tiefstwert' }
  //       ]
  //     };
  //   }, 1000);
  // }



  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: -20,
  //       max: 40
  //     }
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //     // datalabels: {
  //     //   anchor: 'end',
  //     //   align: 'end'
  //     // }
  //   }
  // };
  // public barChartType: ChartType = 'bar';
  // public barChartPlugins = [
  //   // DataLabelsPlugin
  // ];

  // public barChartData!: ChartData<'bar'>;

  // // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   // console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   // console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40];

  //   this.chart?.update();
  // }

}
