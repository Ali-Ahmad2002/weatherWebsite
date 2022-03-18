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
    // this.service.loadCurrentData();
    this.service.loadWeeklyWeather();
  }

  searchCities(id: any) {
    console.log('city', id);
    // this.service.currentWeather = [];
    this.service.weeklyWeather = [];
    this.service.city = id;
    // this.service.loadCurrentData();
    this.service.loadWeeklyWeather();
  }


}
