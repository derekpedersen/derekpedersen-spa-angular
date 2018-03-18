import { Component, Input, Pipe } from '@angular/core';

import { PhotoAlbum } from './photo-album.model';

import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'photo-album',
    templateUrl: `./photo-album.template.html`
})

export class PhotoAlbumComponent {
    @Input() model: PhotoAlbum;

    public isLoading: boolean = false;
    public errorMessage: string;

    constructor() {

    }

    ngOnInit() {

    }
}

@Pipe({ name: 'safeHtml' })
export class Safe {
    constructor(private sanitizer: DomSanitizer) { }

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}