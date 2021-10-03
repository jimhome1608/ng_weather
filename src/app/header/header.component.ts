import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, NavigationStart  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';

  constructor(router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.currentRoute = event.url.replace('/','');
        console.log(event.url);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit(): void {
  }

}
