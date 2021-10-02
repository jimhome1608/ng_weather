import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class UnSplashService {
  private responseFromUnsplash = "";
  gotResponseFromUnsplash= new Subject<void>();
  httpClient: HttpClient;

  constructor(private http: HttpClient)
  {
    this.httpClient = http
  }

  public getResponseFromUnSplash() {
     return this.responseFromUnsplash;
  }

  public fetch_random_image() {
    var _url = "https://api.unsplash.com/photos/random?w=250&h=250&client_id=af75ff63f6f032b2637c95417a691c9bbab5a884a4f245bab3f6304bebe43147;";
    console.log(_url);
    this.httpClient.get(_url)
      .subscribe(
        (data:any) => {
          console.log(data.urls.small);
          this.responseFromUnsplash = data.urls.small;
          this.gotResponseFromUnsplash.next();
        }
      );
  }
}
