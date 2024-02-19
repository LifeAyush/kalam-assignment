import { Playlist } from "@/types/types";

export default function PlaylistView({ playlist }: { playlist: Playlist }) {
  return (
    <div className="flex justify-between items-center w-full px-4 py-1 cursor-pointer hover:bg-[#242424]">
      <div className="flex items-center gap-2">
        <img
          src={playlist.image}
          alt={playlist.name}
          className="h-[48px] w-[48px] object-cover rounded"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-arial font-normal">
            {playlist.name}
          </div>
          <div className="text-[#a7a7a7] font-['Arial'] text-sm font-normal">
            {playlist.songs} songs
          </div>
        </div>
      </div>
      <div className="text-[#a7a7a7] font-['Arial'] text-sm font-normal">
        {playlist.time}
      </div>
    </div>
  );
}
