"use client";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import SongListView from "./SongListView";
import PlaylistView from "./PlaylistView";

interface Song {
  id: number;
  name: string;
  singer: string;
  time: string;
  image: StaticImageData;
}

interface Playlist {
  id: number;
  name: string;
  songs: number;
  time: string;
  image: StaticImageData;
}

interface ListViewProps {
  title: string;
  songs: Song[];
  playlists: Playlist[];
}

export default function ListView({ title, songs, playlists }: ListViewProps) {
  const [type, setType] = useState<string>("song");

  useEffect(() => {
    if (title === "My Playlists") {
      setType("playlist");
    } else {
      setType("song");
    }
  }, [title]);

  return (
    <div className="flex flex-col gap-4 items-start justify-start px-4 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="text-white font-arial font-bold">{title}</div>
        <div className="text-white font-arial font-normal cursor-pointer">
          See all
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-full">
        {type === "song"
          ? songs.map((song) => {
              return <SongListView key={song.id} song={song} />;
            })
          : playlists.map((playlist) => {
              return <PlaylistView key={playlist.id} playlist={playlist} />;
            })}
      </div>
    </div>
  );
}
