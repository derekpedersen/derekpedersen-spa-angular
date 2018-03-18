import { Component } from '@angular/core';

import { SharedService } from '../shared/shared.service'; 

@Component({
    selector: 'homepage',
    templateUrl: `./homepage.template.html`
})

export class HomePageComponent {
    public title: string;
    public subtitle: string;

    constructor(private sharedService: SharedService) {
        this.title = this.sharedService.mdCardTitle;
        this.subtitle = this.sharedService.mdCardSubtitle;
    }

    ngOnInit() {

    }
}