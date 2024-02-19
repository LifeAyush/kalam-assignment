import Banner from "./Banner";
import CardDisplay from "./CardDisplay";
import MainAreaControls from "./MainAreaControls";
import songCover1 from "@/assets/songCover1.jpeg";
import songCover2 from "@/assets/songCover2.jpeg";
import { SongCardData } from "@/types/types";

const SongCards: SongCardData[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  image: songCover1,
  name: "lofi beats",
  singer: "chill beats, lofi vibes, new relaxing tracks every…",
}));

const NewReleases: SongCardData[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  image: songCover2,
  name: "Chill Hits",
  singer: "Kick back to the best new and recent chill beats…",
}));

export default function MainArea() {
  return (
    <div className="flex flex-col px-8 pb-[8em] w-full bg-[#18191B] gap-8 overflow-y-scroll scroll-container relative">
      <MainAreaControls />
      <Banner />
      <CardDisplay data={SongCards} title="Spotify Playlists" />
      <CardDisplay data={NewReleases} title="New Releases for you" />
    </div>
  );
}
