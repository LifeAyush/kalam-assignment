"use client";
import { useState, useEffect } from "react";
import SongListView from "./SongListView";
import PlaylistView from "./PlaylistView";
import { Song, Playlist } from "@/types/types";

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

  const renderItems = (
    items: any[],
    renderItem: (item: any) => JSX.Element
  ) => {
    return displayMore
      ? items.map(renderItem)
      : items.slice(0, 4).map(renderItem);
  };

  useEffect(() => {
    setType(title === "My Playlists" ? "playlist" : "song");
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
          ? renderItems(songs, (song) => (
              <SongListView key={song.id} song={song} />
            ))
          : renderItems(playlists, (playlist) => (
              <PlaylistView key={playlist.id} playlist={playlist} />
            ))}
      </div>
    </div>
  );
}
