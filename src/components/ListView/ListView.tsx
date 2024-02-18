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
  const [displayMore, setDisplayMore] = useState(false);

  const handleMore = () => {
    setDisplayMore(!displayMore);
  };
  useEffect(() => {
    if (title === "My Playlists") {
      setType("playlist");
    } else {
      setType("song");
    }
  }, [title]);

  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full">
      <div className="flex justify-between items-center w-full px-4">
        <div className="text-white font-arial font-bold">{title}</div>
        <div
          className="text-[#b3b3b3] font-['Arial'] font-normal cursor-pointer"
          onClick={handleMore}
        >
          See {displayMore ? "less" : "all"}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-full">
        {type === "song"
          ? displayMore
            ? songs.map((song) => {
                return <SongListView key={song.id} song={song} />;
              })
            : songs.slice(0, 4).map((song) => {
                return <SongListView key={song.id} song={song} />;
              })
          : displayMore
          ? playlists.map((playlist) => {
              return <PlaylistView key={playlist.id} playlist={playlist} />;
            })
          : playlists.slice(0, 2).map((playlist) => {
              return <PlaylistView key={playlist.id} playlist={playlist} />;
            })}
      </div>
    </div>
  );
}
