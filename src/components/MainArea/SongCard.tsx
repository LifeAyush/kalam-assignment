import Image, { StaticImageData } from "next/image";

interface SongCard {
  id: number;
  image: StaticImageData;
  name: string;
  singer: string;
}

export default function SongCard({ data }: { data: SongCard }) {
  return (
    <div className="flex flex-col flex-shrink-0 justify-center items-start gap-4 rounded-lg w-[10.2rem] cursor-pointer">
      <Image
        src={data.image}
        alt="Lofi Beats"
        className="w-full rounded-md object-cover"
      />
      <div className="flex flex-col justify-center items-start w-full gap-1">
        <div className="text-white font-['Arial'] text-[.95rem] font-bold">
          {data.name}
        </div>
        <div className="w-full text-[#a7a7a7] font-['Arial'] text-sm">
          {data.singer}
        </div>
      </div>
    </div>
  );
}
