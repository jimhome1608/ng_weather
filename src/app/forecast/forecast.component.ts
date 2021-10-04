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
    //  1633352400 is unix time stamp second since 1970;
    const int_date = parseInt(_date, 10);
    const milliseconds = int_date * 1000;
    let date = new Date(milliseconds);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let formattedTime = dd + '/' + mm + '/' +  yyyy;

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
