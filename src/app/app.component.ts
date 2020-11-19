import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isNavbarCollapse = true;

  currentUrl: string = "/";

  constructor(private _router: Router) {
      this._router.events.subscribe(
        event => {
          if (event instanceof NavigationEnd) {
            this.currentUrl = event.url.split('#')[0];
          }
        }
      );
  }
}
