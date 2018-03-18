import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../shared/shared.module';

import { ProgrammingDefaultComponent } from './default/default.component';
import { CsharpComponent } from './csharp/csharp.component';
import { ProgrammingComponent } from './programming.component';

import { ProgrammingRoutingModule } from './programming.routing';

@NgModule({
    imports: [
        ProgrammingRoutingModule,
        FlexLayoutModule,
        SharedModule,
        CommonModule
    ],
    providers: [
    ],
    declarations: [
        ProgrammingDefaultComponent,
        ProgrammingComponent,
        CsharpComponent
    ],
    bootstrap: [
    ]
})

export class ProgrammingModule { }