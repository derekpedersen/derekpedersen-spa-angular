import { Component } from '@angular/core';

import { Resume } from './resume.model';

import { SharedService } from '../shared/shared.service';
import { ResumeService } from './resume.service';

@Component({
    selector: 'resume',
    templateUrl: `./resume.template.html`
})

export class ResumeComponent {
    public title: string;
    public subtitle: string;
    public resume: Resume;
    public errorMessage: string;
    public isLoading: boolean;

    constructor(
        private sharedService: SharedService,
        private service: ResumeService) {

        this.title = this.sharedService.mdCardTitle;
        this.subtitle = this.sharedService.mdCardSubtitle;
        this.resume = new Resume();
    }

    ngOnInit() {
        this.loadResume();
    }

    public loadResume() {
        this.isLoading = true;
        this.service.getResume()
            .subscribe(result => {
                this.resume = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }
}