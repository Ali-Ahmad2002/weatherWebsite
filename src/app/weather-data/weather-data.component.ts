import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataComponent } from '../chart-data/chart-data.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  value = '';

  constructor(public service: DataServiceService) { }

  ngOnInit(): void {
  }

  async searchCities(value: any) {
    this.service.currentWeather = [];
    this.service.weeklyWeather = [];
    this.service.maxTempData = [];
    this.service.minTempData = [];
    this.service.avTempData = [];
    this.service.allDay = [];
    this.service.city = value;
    this.service.showData();
    await this.service.loadData();

  }

  showTemp(temp: any) {
    return temp.toFixed(0);
  }

  showDate(day: any) {
    let today = new Date(day * 1000);
    return today
  }

  showAverage(max: any, min: any) {
    let average = (max + min) / 2;
    return average.toFixed(0);
  }


}
