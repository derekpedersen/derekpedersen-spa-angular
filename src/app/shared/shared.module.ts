import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SharedService } from './shared.service';
import { ApiService } from './api/api.service';

import { InternetIconRibbonComponent } from './internet-icon-ribbon/internet-icon-ribbon.component';

import { MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        HttpClientModule,
        MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule
    ],
    providers: [
        HttpClientModule,
        SharedService,
        ApiService
    ],
    declarations: [
        InternetIconRibbonComponent
    ],
    bootstrap: [
    ],
    exports: [
        CommonModule,
        InternetIconRibbonComponent,
        FlexLayoutModule,
        MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatGridListModule
    ]
})

export class SharedModule { }