import { Component } from '@angular/core';

import { Skatepark } from './skatepark/skatepark.model';
import { SkateparkState } from './skatepark/skatepark-state.model';
import { SkateparkCity } from './skatepark/skatepark-city.model';
import { Album } from '../../gallery/album/album.model';

import { SkateboardingService } from './skateboarding.service';

@Component({
    selector: 'skateboarding',
    templateUrl: `./skateboarding.template.html`
})

export class SkateboardingComponent {

    public isLoading: boolean = false;
    public isSelected: boolean = false;
    public skateparks: Skatepark[];
    public skateparkStates: SkateparkState[];
    public selectedSkatepark: Skatepark;
    public errorMessage: string;

    constructor(private service: SkateboardingService) {
        this.selectedSkatepark = new Skatepark();
        this.skateparks = new Array<Skatepark>();
    }

    ngOnInit() {
        this.loadSkateparkStates();
    }

    public loadSkateparks() {
        this.isLoading = true;
        this.service.getSkateparks()
            .subscribe(result => {
                this.skateparks = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }

    public loadSkateparkStates() {
        this.isLoading = true;
        this.service.getSkateparkStates()
            .subscribe(result => {
                this.skateparkStates = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }

    public selectSkatepark(skatepark: Skatepark) {
        this.selectedSkatepark = skatepark;
        this.isSelected = true;
    }
}