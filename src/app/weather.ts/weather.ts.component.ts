import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/open-weather.service';
import { WeatherData } from '../../models/weatherData';

@Component({
  selector: 'Weather',
  templateUrl: './weather.ts.component.html',
  styleUrls: ['./weather.ts.component.css']
})
export class Weather implements OnInit {

  weatherService: WeatherService;
  subscriptionWeather: any;
  public currentWeatherData: WeatherData = {} as WeatherData;

  constructor( _weatherService: WeatherService) {
    this.weatherService = _weatherService;
  }


  getWeatherIcon() {
    return 'https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/' + this.currentWeatherData.icon + '.png';
  }

  ngOnInit(): void {
    this.currentWeatherData.waitingForData = true;
    this.subscriptionWeather = this.weatherService.onGetCurrentWeatherData.subscribe(
      () => {

        this.currentWeatherData = this.weatherService.getCurrentWeatherData();
        this.currentWeatherData.waitingForData = false;
        console.log("onGetCurrentWeatherData >>>");
        console.log(this.currentWeatherData);
      }
    );
    this.weatherService.get_current_weather();
  }

}
