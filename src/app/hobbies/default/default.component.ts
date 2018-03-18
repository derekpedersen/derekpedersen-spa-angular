import { Component } from '@angular/core';

import { SharedService } from '../../shared/shared.service';

@Component({
    selector: 'hobbies-default',
    templateUrl: `./default.template.html`
})

export class HobbiesDefaultComponent {
    public title: string;
    public subtitle: string;

    constructor(private sharedService: SharedService) {
        this.title = this.sharedService.mdCardTitle;
        this.subtitle = this.sharedService.mdCardSubtitle;
    }
}