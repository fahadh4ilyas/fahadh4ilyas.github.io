import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    TopNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
