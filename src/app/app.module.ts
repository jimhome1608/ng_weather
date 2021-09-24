import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GarageDoorService } from '../garage-door.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GarageDoorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
