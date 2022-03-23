import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {



  constructor(public service: DataServiceService) { }

  ngOnInit(): void {
    this.service.loadCurrentData();
    this.service.loadWeeklyWeather();
  }

  searchCities(id: any, lat: any, lon: any) {
    console.log('LAT POS', lat);
    this.service.currentWeather = [];
    this.service.weeklyWeather = [];
    this.service.city = id;

    this.service.loadCurrentData();
    this.service.loadWeeklyWeather();
  }

  showCurrentWeather(temp: any) {
    return temp.toFixed(0);
  }

  showTempMax(maxTemp: any) {
    return maxTemp.toFixed(0);
  }

  showMinTemp(minTemp: any) {
    return minTemp.toFixed(0);
  }

  showListTemp(listMaxTemp: any) {
    return listMaxTemp.toFixed(0);
  }

  showDate(day: any) {

    let date = new Date();
    console.log('apiDay', date);
    return date
  }

  getDays(currentDate: any) {
    if (currentDate == 1) {
      return 'Mo'
    } else if (currentDate == 2) {
      return 'Tue'
    } else if (currentDate == 3) {
      return 'Wed'
    } else if (currentDate == 4) {
      return 'Thu'
    } else if (currentDate == 5) {
      return 'Fr'
    } else if (currentDate == 6) {
      return 'Sat'
    } else if (currentDate == 7) {
      return 'Sun'
    }
    return currentDate;
  }


}
