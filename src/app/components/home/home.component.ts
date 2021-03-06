import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDocCollapsed = true;

  constructor(private _title: Title) { }

  ngOnInit(): void {
    this._title.setTitle("Fahadh's Documentation");
  }

}
