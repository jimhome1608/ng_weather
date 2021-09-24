import { Component } from '@angular/core';
import { GarageDoorService } from '../garage-door.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'garage-door';
  garageDoorService: GarageDoorService;

  constructor (_service: GarageDoorService) {
    this.garageDoorService = _service;
  }

  public test() {
    console.log('test');
  }

  public open_button_clicked() {
    this.garageDoorService.open_garage_door();
  }

  public close_button_clicked() {
    this.garageDoorService.close_garage_door();
  }


}
