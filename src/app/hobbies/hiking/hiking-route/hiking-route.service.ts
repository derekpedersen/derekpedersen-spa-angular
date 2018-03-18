import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Album } from '../../../gallery/album/album.model';
import { HikingRoute } from './hiking-route.model';
import { HikingRouteCity } from './hiking-route-city.model';
import { HikingRouteState } from './hiking-route-state.model';

import { ApiService } from '../../../shared/api/api.service';

@Injectable()
export class HikingRouteService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private hikingRouteUrl = 'hikingroute';

    public hikingRoutes: HikingRoute[];
    public hikingRoute: HikingRoute;

    constructor(private apiService: ApiService) { }

    getHikingRoutes(): Observable<HikingRoute[]> {
        var resourceUrl = this.hikingRouteUrl;

        return this.apiService.get(resourceUrl);
    }

    getHikingRoute(id: number) {
        var resourceUrl = this.hikingRouteUrl + "/" + id;

        return this.apiService.get(resourceUrl);
    }

    getHikingRouteStates(): Observable<HikingRouteState[]> {
        var resourceUrl = this.hikingRoute + "/states";

        return this.apiService.get(resourceUrl);
    }
}