import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isAboutCollapsed = [true, true, true, true, true];

  showing = "Show All";

  constructor() { }

  ngOnInit(): void {
  }

  toggleOne(id: number) {
    this.isAboutCollapsed[id] = !this.isAboutCollapsed[id];
    this.showing = this.isAboutCollapsed.slice(1).every(val => !val)? "Hide All" : "Show All";
  }

  toggleAll() {
    var toggling = this.isAboutCollapsed.slice(1).some( val => val);
    var i;
    for (i=1; i < this.isAboutCollapsed.length; i++) {
      this.isAboutCollapsed[i] = !toggling;
    }
    this.showing = this.isAboutCollapsed.slice(1).every(val => !val)? "Hide All" : "Show All";
  }

}
