import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { ContactComponent } from './contact/contact.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ResumeComponent,
    CoverLetterComponent,
    ContactComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
