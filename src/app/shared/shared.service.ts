import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

@Injectable()
export class SharedService {

    public mdCardTitle = "Derek Pedersen";
    public mdCardSubtitle = "Software developer by day, skateboarder by weekend.";

    constructor() { }
}