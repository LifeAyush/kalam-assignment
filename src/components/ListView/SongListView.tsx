import Image, { StaticImageData } from "next/image";

interface Song {
  id: number;
  name: string;
  singer: string;
  time: string;
  image: StaticImageData;
}

export default function SongListView({ song }: { song: Song }) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image
          src={song.image}
          alt={song.name}
          className="h-[48px] w-[48px] object-cover rounded"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-arial font-normal">{song.name}</div>
          <div className="text-white font-arial font-normal">{song.singer}</div>
        </div>
      </div>
      <div className="text-white font-arial font-normal">{song.time} ago</div>
    </div>
  );
}
