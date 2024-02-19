"use client";
import React, { useState } from "react";
import SongCard from "./SongCard";
import { SongCardData } from "@/types/types";

interface CardDisplayProps {
  title: string;
  data: SongCardData[];
}

export default function CardDisplay({ title, data }: CardDisplayProps) {
  const [displayMore, setDisplayMore] = useState(false);

  const handleMore = () => {
    setDisplayMore(!displayMore);
  };

  return (
    <div className="flex flex-col justify-center items-start w-full gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-['Arial'] text-xl font-bold">
          {title}
        </div>
        <div
          className="text-[#b3b3b3] font-['Arial'] text-[.8125rem] font-bold cursor-pointer"
          onClick={handleMore}
        >
          Show {displayMore ? "less" : "all"}
        </div>
      </div>
      <div className="flex justify-start items-start gap-6 flex-wrap">
        {displayMore
          ? data.map((song) => <SongCard data={song} key={song.id} />)
          : data
              .slice(0, 6)
              .map((song) => <SongCard data={song} key={song.id} />)}
      </div>
    </div>
  );
}
