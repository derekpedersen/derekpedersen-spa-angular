import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../shared/shared.module';

import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { Safe } from './photo-album/photo-album.component';

import { GalleryService } from './gallery.service';

@NgModule({
    imports: [
        FlexLayoutModule,
        SharedModule,
        CommonModule
    ],
    providers: [
        GalleryService
    ],
    declarations: [
        PhotoAlbumComponent,
        Safe
    ],
    bootstrap: [
    ],
    exports: [
        PhotoAlbumComponent
    ]
})

export class GalleryModule { }