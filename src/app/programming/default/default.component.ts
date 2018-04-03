import { Component } from '@angular/core';

import { SharedService } from '../../shared/shared.service';

@Component({
    selector: 'programming-default',
    templateUrl: `./default.template.html`
})

export class ProgrammingDefaultComponent {
    public title: string;
    public subtitle: string;
    public isLoading: boolean;

    constructor(private sharedService: SharedService) {
        this.title = this.sharedService.mdCardTitle;
        this.subtitle = this.sharedService.mdCardSubtitle;
        this.isLoading = false;
    }
}