import { Component, OnInit } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  isNavbarCollapse = true;

  // currentUrl: string = "/";

  constructor(
    // private _router: Router
    ) {}

  ngOnInit(): void {
    // this._router.events.subscribe(
    //   event => {
    //     if (event instanceof NavigationEnd) {
    //       this.currentUrl = event.url.split('#')[0];
    //     }
    //   }
    // );
  }

}
