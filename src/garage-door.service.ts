import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class GarageDoorService {
  private host_ip = '192.168.1.108:8083';

  httpClient: HttpClient;
  constructor(private http: HttpClient)
  {
    this.httpClient = http
  }

  public open_garage_door() {
    var _url = "http://"+this.host_ip+"/relay_switch2.php?garagekeys=iamyumikowatanabe24121970&instruction=up";
    console.log(_url);
    this.httpClient.get(_url)
      .subscribe(
        (data:any) => {
          console.log(data)
        }
      );
  }

  public close_garage_door() {
    var _url = "http://"+this.host_ip+"/relay_switch2.php?garagekeys=iamyumikowatanabe24121970&instruction=down";
    console.log(_url);
    this.httpClient.get(_url)
      .subscribe(
        (data:any) => {
          console.log(data)
        }
      );
  }
}
