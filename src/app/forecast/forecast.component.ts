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
  }

  make_date(_date: string) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(1633352400);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let formattedTime = mm + '/' + dd + '/' + yyyy;

    console.log(formattedTime);
    return formattedTime;
    const _res = new Date(_date);
    return _res;
  }

  ngOnInit(): void {
    this.subscriptionWeather = this.weatherService.onGetForecaseWeatherData.subscribe(
      () => {

        this.forecaseWeatherData = this.weatherService.getForecaseWeatherData();
        console.log(this.forecaseWeatherData);
      }
    );
    this.weatherService.get_forecast_weather();
  }

}
