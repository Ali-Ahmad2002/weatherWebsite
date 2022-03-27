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
