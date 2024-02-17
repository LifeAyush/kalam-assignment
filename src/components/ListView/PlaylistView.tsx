import Image, { StaticImageData } from "next/image";

interface Playlist {
  id: number;
  name: string;
  songs: number;
  time: string;
  image: StaticImageData;
}

export default function PlaylistView({ playlist }: { playlist: Playlist }) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image
          src={playlist.image}
          alt={playlist.name}
          className="h-[48px] w-[48px] object-cover rounded"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-arial font-normal">
            {playlist.name}
          </div>
          <div className="text-white font-arial font-normal">
            {playlist.songs} songs
          </div>
        </div>
      </div>
      <div className="text-white font-arial font-normal">{playlist.time}</div>
    </div>
  );
}
