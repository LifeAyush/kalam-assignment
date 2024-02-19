import { Song } from "@/types/types";

export default function SongListView({ song }: { song: Song }) {
  return (
    <div className="flex justify-between items-center w-full px-4 py-1 cursor-pointer hover:bg-[#242424]">
      <div className="flex items-center gap-2">
        <img
          src={song.image}
          alt={song.name}
          className="h-[48px] w-[48px] object-cover rounded"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-['Arial'] font-normal">
            {song.name}
          </div>
          <div className="text-[#a7a7a7] font-['Arial'] text-sm font-normal">
            {song.singer}
          </div>
        </div>
      </div>
      <div className="text-[#a7a7a7] font-['Arial'] text-sm font-normal">
        {song.time} ago
      </div>
    </div>
  );
}
