import { ImgurAlbum } from "../imgur/imgur-album.model";
import { Address } from "../../shared/address/address.model";

export class PhotoAlbum {
    id: string;
    name: string;
    description: string;
    address: Address;
    albumId: string;
    album: ImgurAlbum;
}