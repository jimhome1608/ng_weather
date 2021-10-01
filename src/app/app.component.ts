import { Component, OnInit } from '@angular/core';
import { UnSplashService } from '../unsplash.service';
import { WeatherService } from '../open-weather.service';
import { Weather } from './weather.ts/weather.ts.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'garage-door';
  unsplashService: UnSplashService;
  weatherService: WeatherService;
  subscriptionUnSplash: any;
  subscriptionWeather: any;
  public responseFromDoor = "???";
  public responseFromCamera = "???";
  public responseFromUnSplash = "";
  public loader_gif = "./assets/loader.gif"

  constructor (_unsplashService: UnSplashService, _weatherService: WeatherService) {
    this.unsplashService = _unsplashService;
    this.weatherService = _weatherService;
  }


  ngOnInit() {
    this.unsplashService.fetch_random_image();
    this.subscriptionUnSplash  = this.unsplashService.gotResponseFromUnsplash.subscribe(
      () => {
        this.responseFromUnSplash = this.unsplashService.getResponseFromUnSplash();
      }
    );
  }
}
