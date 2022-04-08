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

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor(public data: DataServiceService) { }
  arrayData = this.data.weeklyWeather;

  dataIndex: any = [];

  ngOnInit(): void {
    this.showData()
  }




  showData() {
    console.log('WEEKLY', this.data.weeklyWeather);
    //   for (let i = 0; i < this.arrayData.length; i++) {
    //     let indexData = this.arrayData[i].daily;
    //     console.log('INDEX', indexData);
    //     this.dataIndex = indexData;
    //   }
  }



  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: -20,
        max: 50
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    // DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        data: [20, 59, 80, 81, 56, 55, 40], label: 'Höchstwert',
        // backgroundColor: 'blue',
        // borderColor: 'blue',
      },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Durchschnittswert' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Tiefstwert' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }

}
