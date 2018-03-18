import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Album } from '../../gallery/album/album.model';
import { AlbumType } from '../../gallery/album/album-type.enum'
import { Skatepark } from './skatepark/skatepark.model';
import { SkateparkCity } from './skatepark/skatepark-city.model';
import { SkateparkState } from './skatepark/skatepark-state.model';

import { GalleryService } from '../../gallery/gallery.service';
import { SkateparkService } from './skatepark/skatepark.service';

@Injectable()
export class SkateboardingService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private skateboardingUrl = 'skateboarding';  // URL to web api

    public skateparks: Skatepark[];
    public skatepark: Skatepark;

    constructor(
        private galleryService: GalleryService,
        private skateparkService: SkateparkService) { }

    getSkateparks(): Observable<Skatepark[]> {
        return this.skateparkService.getSkateparks();
    }
    
    getSkateparkAlbums(): Observable<Album[]> {
        var albumType = AlbumType.skateparks;
        return this.galleryService.getAlbums(albumType);
    }

    getSkateparkStates(): Observable<SkateparkState[]> {
        return this.skateparkService.getSkateparkStates();
    }
}