import Image from "next/image";
import userProfile from "@/assets/userProfile.jpg";
import { LuBellDot } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import ListView from "@/components/ListView/ListView";
import { Song, Playlist } from "@/types/types";

const iconStyle = { color: "white", fontSize: "1.25em", cursor: "pointer" };

export default function RightSidePanel() {
  const RecentSongs: Song[] = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "Savage",
    singer: "Aespa",
    time: "7 mins",
    image: userProfile,
  }));

  const MyPlaylists: Playlist[] = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    name: "Land of rising",
    songs: 38,
    time: "2hr 43 mins",
    image: userProfile,
  }));

  const listViewProps = [
    { title: "Recently Played", songs: RecentSongs, playlists: MyPlaylists },
    { title: "My Playlists", songs: RecentSongs, playlists: MyPlaylists },
  ];
  return (
    <div className="scroll-container xl:flex flex-col w-[300px] h-full bg-[#0A0A0A] gap-6 flex-shrink-0 py-7 overflow-y-scroll hidden">
      <div className="flex justify-between items-start w-full p-4">
        <div className="flex items-center justify-start gap-3">
          <Image
            src={userProfile}
            alt="User Profile Pic"
            className="w-[24px] h-[24px] rounded-full object-cover"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div className="text-white font-['Arial'] font-normal">
            Timothy Luca
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <LuBellDot style={iconStyle} />
          <FaAngleDown style={iconStyle} />
        </div>
      </div>

      {listViewProps.map((props, index) => (
        <ListView key={index} {...props} />
      ))}
    </div>
  );
}
