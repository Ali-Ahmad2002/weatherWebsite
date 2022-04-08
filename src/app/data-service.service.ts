import { formatDate } from '@angular/common';
import { Injectable, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  key: string = 'acc636805422f66eae7c098211b0a208';
  city: string = 'Berlin';

  maxTempData: any = [];
  minTempData: any = [];
  avTempData: any = [];
  allDay: any = [];

  currentWeather: any = [];
  weeklyWeather: any = [];
  lat: string = '52.5244';
  lon: string = '13.4105';

  constructor() { }

  getCurrentWeather() {
    console.log(this.city);
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}&units=metric`);
  }


  getWeeklyWeather(lat: any, lon: any) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`);
    // return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&dt=${this.time}&appid=${this.key}&units=metric`);
  }

  async loadData() {
    await this.loadCurrentData();
    await this.loadWeeklyWeather();
  }

  showData() {
    setTimeout(() => {
      for (let i = 0; i < this.weeklyWeather[0].daily.length; i++) {
        let maxTemp = this.weeklyWeather[0].daily[i].temp.max;
        let minTemp = this.weeklyWeather[0].daily[i].temp.min;
        let averageTemp = (maxTemp + minTemp) / 2;
        // console.log('WEEKLY', averageTemp.toFixed(2));
        this.maxTempData.push(this.weeklyWeather[0].daily[i].temp.max);
        this.minTempData.push(this.weeklyWeather[0].daily[i].temp.min);
        this.avTempData.push(averageTemp.toFixed(2));
        // console.log('DATE',this.weeklyWeather[0].daily[0].dt )
      }
      for (let j = 0; j < this.weeklyWeather[0].daily.length - 1; j++) {
        let currentDate = new Date(this.weeklyWeather[0].daily[j].dt * 1000);
        const cValue = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
        // let newDay = new Date();
        console.log('NEWDATE', cValue);
        this.allDay.push(cValue);
        // this.allDay.push(newDay);
      }
      this.barChartData = {
        labels: [this.allDay[0], 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            data: [this.maxTempData[0], this.maxTempData[1], this.maxTempData[2], this.maxTempData[3], this.maxTempData[4], this.maxTempData[5], this.maxTempData[6]], label: 'Höchstwert',

            // borderColor: 'blue',
          },
          {
            data: [this.avTempData[0], this.avTempData[1], this.avTempData[2], this.avTempData[3], this.avTempData[4], this.avTempData[5], this.avTempData[6]],
            label: 'Durchschnittswert',
            // backgroundColor: '#a98641',
          },
          {
            data: [this.minTempData[0], this.minTempData[1], this.minTempData[2], this.minTempData[3], this.minTempData[4], this.minTempData[5], this.minTempData[6]], label: 'Tiefstwert',
            // backgroundColor: '#6a8aa4',
          }
        ]
      };
    }, 1000);
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: -20,
        max: 40
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

  public barChartData!: ChartData<'bar'>;

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


  async loadCurrentData() {
    const response = await this.getCurrentWeather();
    const responseAsJson = await response.json();
    this.currentWeather.push(responseAsJson);
    this.lat = this.currentWeather[0].coord.lat;
    this.lon = this.currentWeather[0].coord.lon;
    console.log('Current', this.currentWeather);
  }

  async loadWeeklyWeather() {
    const response = await this.getWeeklyWeather(this.lat, this.lon);
    const responseAsJson = await response.json();
    this.weeklyWeather.push(responseAsJson);
    console.log('weekly', this.weeklyWeather);
  }


  //Second Variant 
  // loadCurrentData() {

  //   this.getCurrentWeather().then(async (response: any) => {
  //     let responseAsJson = await response.json();
  //     this.currentWeather.push(responseAsJson);
  //     this.lat = this.currentWeather[0].coord.lat;
  //     this.lon = this.currentWeather[0].coord.lon;
  //     console.log('current', this.currentWeather);
  //     this.loadWeeklyWeather();
  //   });
  // }

  // loadWeeklyWeather() {

  //   this.getWeeklyWeather(this.lat, this.lon).then(async (response: any) => {
  //     let responseAsJson = await response.json();
  //     this.weeklyWeather.push(responseAsJson);
  //     console.log('weekly', this.weeklyWeather);
  //   })
  // }
}
