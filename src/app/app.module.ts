import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { UnSplashService } from '../services/unsplash.service';
import { WeatherService } from '../services/open-weather.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Weather } from './weather.ts/weather.ts.component';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';
import { RouterModule } from '@angular/router';

const routes =
[
  {path:'', component:Weather},
  {path:'forecast', component:ForecastComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    Weather,
    HeaderComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UnSplashService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
