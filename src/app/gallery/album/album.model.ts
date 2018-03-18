import { Image } from '../image/image.model';

import { AlbumType } from './album-type.enum';

export class Album {
    public id: string;
    public type: AlbumType;
    public title: string;
    public description: string;
    public images: Image[];
}