import Banner from "./Banner";
import CardDisplay from "./CardDisplay";
import MainAreaControls from "./MainAreaControls";
import { StaticImageData } from "next/image";
import songCover1 from "../../assets/songCover1.jpeg";
import songCover2 from "../../assets/songCover2.jpeg";

interface SongCard {
  id: number;
  image: StaticImageData;
  name: string;
  singer: string;
}

const SongCardData: SongCard[] = [
  {
    id: 1,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new tracks every…",
  },
  {
    id: 2,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new tracks every…",
  },
  {
    id: 3,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new tracks every…",
  },
  {
    id: 4,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new tracks every…",
  },
  {
    id: 5,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new tracks every…",
  },
];

const NewReleasesData: SongCard[] = [
  {
    id: 1,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill…",
  },
  {
    id: 2,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill…",
  },
  {
    id: 3,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill…",
  },
  {
    id: 4,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill…",
  },
  {
    id: 5,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill…",
  },
];

export default function MainArea() {
  return (
    <div className="flex flex-col px-8 pb-[8em] w-full bg-[#18191B] gap-8 overflow-y-scroll scroll-container relative">
      <MainAreaControls />
      <Banner />
      <CardDisplay data={SongCardData} title="Spotify Playlists" />
      <CardDisplay data={NewReleasesData} title="New Releases for you" />
    </div>
  );
}
