import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { ProgrammingModule } from './programming/programming.module';
import { GalleryModule } from './gallery/gallery.module';

import { ResumeService } from './resume/resume.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        SharedModule,
        HobbiesModule,
        ProgrammingModule,
        GalleryModule
    ],
    providers: [
        ResumeService
    ],
    declarations: [
        AppComponent,
        HomePageComponent,
        ResumeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }