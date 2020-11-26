import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagenotfound',
  template: `
  <div class="container text-center">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
`,
  styles: [
  ]
})
export class PagenotfoundComponent implements OnInit {

  constructor(private _title: Title) { }

  ngOnInit(): void {
    this._title.setTitle('404: Page Not Found')
  }

}
