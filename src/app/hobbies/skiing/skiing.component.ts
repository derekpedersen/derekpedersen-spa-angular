import { Component } from '@angular/core';

import { SkiArea } from './ski-area/ski-area.model';
import { SkiAreaState } from './ski-area/ski-area-state.model';
import { SkiAreaCity } from './ski-area/ski-area-city.model';
import { Album } from '../../gallery/album/album.model';

import { SkiingService } from './skiing.service';

@Component({
    selector: 'skiing',
    templateUrl: `./skiing.template.html`
})

export class SkiingComponent {

    public isLoading: boolean = false;
    public isSelected: boolean = false;
    public skiAreas: SkiArea[];
    public skiAreaStates: SkiAreaState[];
    public selectedSkiArea: SkiArea;
    public errorMessage: string;

    constructor(private service: SkiingService) {
        this.selectedSkiArea = new SkiArea();
        this.skiAreas = new Array<SkiArea>();
    }

    ngOnInit() {
        this.loadSkiAreaStates();
    }

    public loadSkiAreaStates() {
        this.isLoading = true;
        this.service.getSkiAreaStates()
            .subscribe(result => {
                this.skiAreaStates = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }

    public selectSkiArea(skiArea: SkiArea) {
        this.selectedSkiArea = skiArea;
        this.isSelected = true;
    }
}