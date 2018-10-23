import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Resume } from './resume.model';

import { ApiService } from '../api/api.service';

@Injectable()
export class ResumeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private resumeUrl = 'resume';  // URL to web api

    public resume: Resume;

    constructor(private apiService: ApiService) { }

    getResume(): Observable<Resume> {
        var resourceUrl = this.resumeUrl;

        return this.apiService.get(resourceUrl);
    }
}