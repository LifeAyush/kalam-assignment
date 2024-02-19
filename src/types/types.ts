import { StaticImageData } from "next/image";

export interface Song {
  id: number;
  name: string;
  singer: string;
  time: string;
  image: StaticImageData;
}

export interface Playlist {
  id: number;
  name: string;
  songs: number;
  time: string;
  image: StaticImageData;
}

export interface SongCardData {
  id: number;
  image: StaticImageData;
  name: string;
  singer: string;
}
