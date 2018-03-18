import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Album } from '../../../gallery/album/album.model';
import { SkiArea } from './ski-area.model';
import { SkiAreaCity } from './ski-area-city.model';
import { SkiAreaState } from './ski-area-state.model';

import { ApiService } from '../../../shared/api/api.service';

@Injectable()
export class SkiAreaService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private skiAreaUrl = 'skiarea';  

    public skiAreas: SkiArea[];
    public skiArea: SkiArea;

    constructor(private apiService: ApiService) { }

    getSkiAreas(): Observable<SkiArea[]> {
        var resourceUrl = this.skiAreaUrl;

        return this.apiService.get(resourceUrl);
    }

    getSkiArea(id: number) {
        var resourceUrl = this.skiAreaUrl + "/" + id;

        return this.apiService.get(resourceUrl);
    }

    getSkiAreaStates(): Observable<SkiAreaState[]> {
        var resourceUrl = this.skiAreaUrl + "/states";

        return this.apiService.get(resourceUrl);
    }
}