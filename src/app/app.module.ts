import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { InternetIconRibbonComponent } from './internet-icon-ribbon/internet-icon-ribbon.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { AppRoutingModule } from './app.routing';

import { ApiService } from './api/api.service';
import { ResumeService } from './resume/resume.service';

import { MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatGridListModule, MatSidenavModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    InternetIconRibbonComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatProgressBarModule, MatGridListModule
  ],
  providers: [
    ApiService,
    ResumeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
