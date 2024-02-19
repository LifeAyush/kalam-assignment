export interface Song {
  id: number;
  name: string;
  singer: string;
  time: string;
  image: string;
}

export interface Playlist {
  id: number;
  name: string;
  songs: number;
  time: string;
  image: string;
}

export interface SongCardData {
  id: number;
  image: string;
  name: string;
  singer: string;
}
