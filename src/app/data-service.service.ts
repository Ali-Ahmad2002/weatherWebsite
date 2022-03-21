import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  key: string = 'acc636805422f66eae7c098211b0a208';
  city: string = 'Berlin';

  currentWeather: any = [];
  weeklyWeather: any = [];

  constructor() { }

  getCurrentWeather() {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}&units=metric`);
  }

  getWeeklyWeather() {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }


  loadCurrentData() {
    this.getCurrentWeather().then(async (response: any) => {
      let responseAsJson = await response.json();
      console.log('current', responseAsJson);
      this.currentWeather.push(responseAsJson);
    });
  }

  loadWeeklyWeather() {
    this.getWeeklyWeather().then(async (response: any) => {
      let responseAsJson = await response.json();
      this.weeklyWeather.push(responseAsJson);
      console.log('weekly', this.weeklyWeather);
    })
  }
}
