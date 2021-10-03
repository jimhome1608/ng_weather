import { Component, OnInit } from '@angular/core';
import { UnSplashService } from '../services/unsplash.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'garage-door';
  unsplashService: UnSplashService;
  subscriptionUnSplash: any;
  subscriptionWeather: any;
  public responseFromDoor = "???";
  public responseFromCamera = "???";
  public responseFromUnSplash = "";
  public loader_gif = "./assets/loader.gif"

  constructor (_unsplashService: UnSplashService) {
    this.unsplashService = _unsplashService;
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
