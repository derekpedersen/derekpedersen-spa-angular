import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../shared/shared.module';

import { SkateboardingService } from './skateboarding/skateboarding.service';
import { SkateparkService } from './skateboarding/skatepark/skatepark.service';
import { SkiingService } from './skiing/skiing.service';
import { SkiAreaService } from './skiing/ski-area/ski-area.service';
import { HikingService } from './hiking/hiking.service';
import { HikingRouteService } from './hiking/hiking-route/hiking-route.service';

import { HobbiesDefaultComponent } from './default/default.component';
import { SkateboardingComponent } from './skateboarding/skateboarding.component';
import { SkiingComponent } from './skiing/skiing.component';
import { HikingComponent } from './hiking/hiking.component';
import { HobbiesComponent } from './hobbies.component';

import { HobbiesRoutingModule } from './hobbies.routing';
import { GalleryModule } from '../gallery/gallery.module';

@NgModule({
    imports: [
        HobbiesRoutingModule,
        FlexLayoutModule,
        SharedModule,
        CommonModule,
        GalleryModule,
        SharedModule
    ],
    providers: [
        SkateboardingService,
        SkateparkService,
        SkiingService,
        HikingService,
        HikingRouteService
    ],
    declarations: [
        SkateboardingComponent,
        HobbiesDefaultComponent,
        SkiingComponent,
        HikingComponent,
        HobbiesComponent
    ],
    bootstrap: [
    ]
})

export class HobbiesModule { }