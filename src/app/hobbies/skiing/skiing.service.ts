import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Album } from '../../gallery/album/album.model';
import { AlbumType } from '../../gallery/album/album-type.enum'
import { SkiArea } from './ski-area/ski-area.model';
import { SkiAreaCity } from './ski-area/ski-area-city.model';
import { SkiAreaState } from './ski-area/ski-area-state.model';

import { GalleryService } from '../../gallery/gallery.service';
import { SkiAreaService } from './ski-area/ski-area.service';

@Injectable()
export class SkiingService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private skateboardingUrl = 'skiing';  

    public skiAreas: SkiArea[];
    public skiArea: SkiArea;

    constructor(
        private galleryService: GalleryService,
        private skiAreaService: SkiAreaService) { }

    getSkiAreas(): Observable<SkiArea[]> {
        return this.skiAreaService.getSkiAreas();
    }

    getSkiAreaAlbums(): Observable<Album[]> {
        var albumType = AlbumType.skateparks;
        return this.galleryService.getAlbums(albumType);
    }

    getSkiAreaStates(): Observable<SkiAreaState[]> {
        return this.skiAreaService.getSkiAreaStates();
    }
}