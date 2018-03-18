﻿import { Component } from '@angular/core';

import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'programming',
    templateUrl: `./programming.template.html`
})

export class ProgrammingComponent {
    public title: string;
    public subtitle: string;

    constructor(private sharedService: SharedService) {
        this.title = this.sharedService.mdCardTitle;
        this.subtitle = this.sharedService.mdCardSubtitle;
    }
}