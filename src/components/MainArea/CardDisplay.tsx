import { StaticImageData } from "next/image";
import SongCard from "./SongCard";

interface SongCard {
  id: number;
  image: StaticImageData;
  name: string;
  singer: string;
}

interface CardDisplayProps {
  title: string;
  data: SongCard[];
}

export default function CardDisplay({ title, data }: CardDisplayProps) {
  return (
    <div className="flex flex-col justify-center items-start w-full gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-['Arial'] text-xl font-bold">
          {title}
        </div>
        <div className="text-[#b3b3b3] font-['Arial'] text-[.8125rem] font-bold cursor-pointer">
          Show all
        </div>
      </div>
      <div className="flex justify-start items-start gap-6 flex-wrap">
        {data.map((song) => {
          return <SongCard data={song} key={song.id} />;
        })}
      </div>
    </div>
  );
}
