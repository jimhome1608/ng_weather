import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnSplashService } from '../services/unsplash.service';
import { WeatherService } from '../services/open-weather.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Weather } from './weather.ts/weather.ts.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Weather,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UnSplashService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
