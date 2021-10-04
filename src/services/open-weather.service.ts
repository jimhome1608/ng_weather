

// https://docs.ambeedata.com/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { WeatherData } from '../models/weatherData';

@Injectable()
export class WeatherService {
  private currentWeatherData: WeatherData = {} as WeatherData;
  private forecastWeatherData = {};
  private api_key = '6ef5a21a5f056a57e4339033e1520fd585ff47c04b9ce7d852bfb3d95441ee80';
  private lat = '-37.91537184498749';
  private lng = '145.12326532556176';
  public onGetCurrentWeatherData= new Subject<void>();
  public onGetForecaseWeatherData= new Subject<void>();
  httpClient: HttpClient;
  private forecast_data_key: string = 'forecast_data_key';
  private current_data_key: string = 'current_weather_data_key';

  constructor(private http: HttpClient)
  {
    this.httpClient = http
  }

  public getForecaseWeatherData() {
     return this.forecastWeatherData;
  }

  public getCurrentWeatherData() {
    return this.currentWeatherData;
 }

  private convertToCelcius(_f: any) {
    const res =  (_f-32) * 5/9;
    return res.toFixed(2);
  }

  private convertToKM(_m: any) {
    const res =  _m * 1.609344;
    return res.toFixed(2);
  }

// https://api.ambeedata.com/weather/forecast/by-lat-lng?lat=12&lng=77&filter=daily

public get_forecast_weather() {
  let _data = localStorage.getItem(this.forecast_data_key);
  if (_data) {
    this.forecastWeatherData = JSON.parse(_data);
    this.onGetForecaseWeatherData.next();
    return;
  }
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json');
  headers = headers.append('x-api-key', this.api_key);

  var _url = "https://api.ambeedata.com/weather/forecast/by-lat-lng?lat="+this.lat+"&lng="+this.lng+"&filter=daily";
  console.log(_url);
  this.httpClient.get(_url , { 'headers': headers })
    .subscribe(
      (d:any) => {
        this.forecastWeatherData = d.data.forecast;
        localStorage.setItem(this.forecast_data_key, JSON.stringify(this.forecastWeatherData));
        this.onGetForecaseWeatherData.next();
      }
    );
}

  public get_current_weather() {
    let _data = localStorage.getItem(this.current_data_key);
    if (_data) {
      this.currentWeatherData = JSON.parse(_data);
      console.log('*************************************');
      console.log(this.currentWeatherData);
      console.log('*************************************');
      this.onGetCurrentWeatherData.next();
      return;
    }
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.append('x-api-key', this.api_key);
    var _url = "https://api.ambeedata.com/weather/latest/by-lat-lng?lat="+this.lat+"&lng="+this.lng;
    console.log(_url);
    this.httpClient.get(_url , { 'headers': headers })
      .subscribe(
        (d:any) => {
          this.currentWeatherData.currentTemp =  this.convertToCelcius(d.data.temperature);
          this.currentWeatherData.summary = d.data.summary;
          this.currentWeatherData.icon = d.data.icon;
          this.currentWeatherData.windSpeed = this.convertToKM(d.data.windSpeed)+' kmh.';
          localStorage.setItem(this.current_data_key, JSON.stringify(this.currentWeatherData));
          this.onGetCurrentWeatherData.next();
        }
      );
  }

}
