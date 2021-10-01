import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../open-weather.service';
import { WeatherData } from '../weatherData';

@Component({
  selector: 'Weather',
  templateUrl: './weather.ts.component.html',
  styleUrls: ['./weather.ts.component.css']
})
export class Weather implements OnInit {

  weatherService: WeatherService;
  subscriptionWeather: any;
  public responseFromWeather = "";
  public weatherData: WeatherData = {} as WeatherData;

  constructor( _weatherService: WeatherService) {
    this.weatherService = _weatherService;
    this.weatherService.get_weather();

  }

  getWeatherIcon() {
    return 'https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/' + this.weatherData.icon + '.png';
  }

  ngOnInit(): void {
    this.weatherData.waitingForData = true;
    this.subscriptionWeather = this.weatherService.gotResponseFromWeather.subscribe(
      () => {

        this.weatherData = this.weatherService.getResponseFromWeather();
        this.weatherData.waitingForData = false;
        console.log(this.weatherData);
      }
    );
  }

}
