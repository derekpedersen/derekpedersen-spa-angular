import { Component } from '@angular/core';

import { HikingRoute } from './hiking-route/hiking-route.model';
import { HikingRouteState } from './hiking-route/hiking-route-state.model';
import { HikingRouteCity } from './hiking-route/hiking-route-city.model';
import { Album } from '../../gallery/album/album.model';

import { HikingService } from './hiking.service';

@Component({
    selector: 'hiking',
    templateUrl: `./hiking.template.html`
})

export class HikingComponent {

    public isLoading: boolean = false;
    public isSelected: boolean = false;
    public hikingRoutes: HikingRoute[];
    public hikingRouteStates: HikingRouteState[];
    public selectedHikingRoute: HikingRoute;
    public errorMessage: string;

    constructor(private service: HikingService) {
        this.selectedHikingRoute = new HikingRoute();
        this.hikingRoutes = new Array<HikingRoute>();
    }

    ngOnInit() {
        this.loadHikingRouteStates();
    }

    public loadHikingRouteStates() {
        this.isLoading = true;
        this.service.getHikingRouteStates()
            .subscribe(result => {
                this.hikingRouteStates = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }

    public selectHikingRoute(hikingRoute: HikingRoute) {
        this.selectedHikingRoute = hikingRoute;
        this.isSelected = true;
    }
}