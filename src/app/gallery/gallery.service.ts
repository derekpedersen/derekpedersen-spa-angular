import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { ApiService } from '../shared/api/api.service';

import { Album } from './album/album.model';
import { AlbumType } from './album/album-type.enum'
import { Image } from './image/image.model';

@Injectable()
export class GalleryService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private galleryUrl = "gallery";  // URL to web api

    constructor(private apiService: ApiService) { }

    getAlbums(albumType: AlbumType): Observable<Album[]> {
        var resourceUrl = this.galleryUrl + "/album?albumType=" + albumType;
        return this.apiService.get(resourceUrl);
    }
}