import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
