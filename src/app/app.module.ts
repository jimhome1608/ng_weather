import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnSplashService } from '../unsplash.service';
import { WeatherService } from '../open-weather.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Weather } from './weather.ts/weather.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    Weather
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UnSplashService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
