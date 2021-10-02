

// https://docs.ambeedata.com/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { WeatherData } from '../models/weatherData';

@Injectable()
export class WeatherService {
  private weatherData: WeatherData = {} as WeatherData;
  private api_key = '6ef5a21a5f056a57e4339033e1520fd585ff47c04b9ce7d852bfb3d95441ee80';
  public gotResponseFromWeather= new Subject<void>();
  httpClient: HttpClient;

  constructor(private http: HttpClient)
  {
    this.httpClient = http
  }

  public getResponseFromWeather() {
     return this.weatherData;
  }

  private convertToCelcius(_f: any) {
    const res =  (_f-32) * 5/9;
    return res.toFixed(2);
  }

  private convertToKM(_m: any) {
    const res =  _m * 1.609344;
    return res.toFixed(2);
  }



  public get_current_weather() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.append('x-api-key', this.api_key);
    var _url = "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=-37.91537184498749&lng=145.12326532556176";
    console.log(_url);
    this.httpClient.get(_url , { 'headers': headers })
      .subscribe(
        (d:any) => {
          console.log(JSON.stringify(d));
          this.weatherData.currentTemp =  this.convertToCelcius(d.data.temperature);
          this.weatherData.summary = d.data.summary;
          this.weatherData.icon = d.data.icon;
          this.weatherData.windSpeed = this.convertToKM(d.data.windSpeed)+' kmh.';
          this.gotResponseFromWeather.next();
        }
      );
  }
}
