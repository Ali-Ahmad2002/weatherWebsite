import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  key: string = 'acc636805422f66eae7c098211b0a208';
  city: string = 'Berlin';
  time: any = new Date();

  currentWeather: any = [];
  weeklyWeather: any = [];

  constructor() { }

  getCurrentWeather() {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}&units=metric`);
  }

  getWeeklyWeather(lat: any, lon: any) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.key}`);
    // return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&dt=${this.time}&appid=${this.key}&units=metric`);
  }


  loadCurrentData() {
    this.getCurrentWeather().then(async (response: any) => {
      let responseAsJson = await response.json();
      console.log('current', responseAsJson);
      this.currentWeather.push(responseAsJson);
      console.log(this.currentWeather[0].coord.lat)
      console.log(this.currentWeather[0].coord.lon)
      this.loadWeeklyWeather();
    });
  }

  loadWeeklyWeather() {
   
    console.log(this.currentWeather[0].coord.lat)
    this.getWeeklyWeather(this.currentWeather[0].coord.lat, this.currentWeather.coord.lon).then(async (response: any) => {
      let responseAsJson = await response.json();
      this.weeklyWeather.push(responseAsJson);
      console.log('weekly', this.weeklyWeather);
      console.log('json', responseAsJson);
    })
  }
}
