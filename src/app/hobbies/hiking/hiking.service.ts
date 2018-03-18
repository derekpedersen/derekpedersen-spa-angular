import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Album } from '../../gallery/album/album.model';
import { AlbumType } from '../../gallery/album/album-type.enum'
import { HikingRoute } from './hiking-route/hiking-route.model';
import { HikingRouteCity } from './hiking-route/hiking-route-city.model';
import { HikingRouteState } from './hiking-route/hiking-route-state.model';

import { GalleryService } from '../../gallery/gallery.service';
import { HikingRouteService } from './hiking-route/hiking-route.service';

@Injectable()
export class HikingService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private hikingRouteUrl = 'hiking';

    public hikingRoutes: HikingRoute[];
    public hikingRoute: HikingRoute;

    constructor(
        private galleryService: GalleryService,
        private hikingRouteService: HikingRouteService) { }

    getHikingRoutes(): Observable<HikingRoute[]> {
        return this.hikingRouteService.getHikingRoutes();
    }

    getHikingRouteAlbums(): Observable<Album[]> {
        var albumType = AlbumType.skateparks; // TODO: update this
        return this.galleryService.getAlbums(albumType);
    }

    getHikingRouteStates(): Observable<HikingRouteState[]> {
        return this.hikingRouteService.getHikingRouteStates();
    }
}