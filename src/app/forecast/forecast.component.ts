import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/open-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  weatherService: WeatherService;
  subscriptionWeather: any;
  public forecaseWeatherData: any;

  constructor( _weatherService: WeatherService) {
    this.weatherService = _weatherService;
    this.weatherService.get_forecast_weather();
  }

  ngOnInit(): void {
    this.subscriptionWeather = this.weatherService.onGetForecaseWeatherData.subscribe(
      () => {

        this.forecaseWeatherData = this.weatherService.getForecaseWeatherData();
        console.log(this.forecaseWeatherData);
      }
    );
  }

}
