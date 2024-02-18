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
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 2,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 3,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 4,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 5,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 6,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 7,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 8,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 9,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
  {
    id: 10,
    image: songCover1,
    name: "lofi beats",
    singer: "chill beats, lofi vibes, new relaxing tracks every…",
  },
];

const NewReleasesData: SongCard[] = [
  {
    id: 1,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 2,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 3,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 4,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 5,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 6,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 7,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 8,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 9,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
  },
  {
    id: 10,
    image: songCover2,
    name: "Chill Hits",
    singer: "Kick back to the best new and recent chill beats…",
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
