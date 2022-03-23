import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  key: string = 'acc636805422f66eae7c098211b0a208';
  city: string = 'Berlin';

  currentWeather: any = [];
  weeklyWeather: any = [];
  lat: string = '52.5244';
  lon: string = '13.4105';

  constructor() { }

  getCurrentWeather() {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}&units=metric`);
  }


  getWeeklyWeather(lat: any, lon: any) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`);
    // return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&dt=${this.time}&appid=${this.key}&units=metric`);
  }


  loadCurrentData() {

    this.getCurrentWeather().then(async (response: any) => {
      let responseAsJson = await response.json();
      this.currentWeather.push(responseAsJson);
      this.lat = await this.currentWeather[0].coord.lat;
      this.lon = await this.currentWeather[0].coord.lon;
      console.log('current', this.currentWeather);
    });
  }

  loadWeeklyWeather() {

    this.getWeeklyWeather(this.lat, this.lon).then(async (response: any) => {
      let responseAsJson = await response.json();
      this.weeklyWeather.push(responseAsJson);
      console.log('weekly', this.weeklyWeather);
    })
  }
}
