import Image, { StaticImageData } from "next/image";
import userProfile from "../../Assets/userProfile.jpg";
import { LuBellDot } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import ListView from "../ListView/ListView";

interface Song {
  id: number;
  name: string;
  singer: string;
  time: string;
  image: StaticImageData;
}

interface Playlist {
  id: number;
  name: string;
  songs: number;
  time: string;
  image: StaticImageData;
}

const iconStyle = { color: "white", fontSize: "1.25em", cursor: "pointer" };

export default function RightSidePanel() {
  const RecentSongs: Song[] = [
    {
      id: 1,
      name: "Savage",
      singer: "Aespa",
      time: "7 mins",
      image: userProfile,
    },
    {
      id: 2,
      name: "Savage",
      singer: "Aespa",
      time: "7 mins",
      image: userProfile,
    },
    {
      id: 3,
      name: "Savage",
      singer: "Aespa",
      time: "7 mins",
      image: userProfile,
    },
    {
      id: 4,
      name: "Savage",
      singer: "Aespa",
      time: "7 mins",
      image: userProfile,
    },
  ];

  const MyPlaylists: Playlist[] = [
    {
      id: 1,
      name: "Land of rising sun",
      songs: 38,
      time: "2hr 43 mins",
      image: userProfile,
    },
    {
      id: 2,
      name: "Land of rising sun",
      songs: 38,
      time: "2hr 43 mins",
      image: userProfile,
    },
    {
      id: 3,
      name: "Land of rising sun",
      songs: 38,
      time: "2hr 43 mins",
      image: userProfile,
    },
    {
      id: 4,
      name: "Land of rising sun",
      songs: 38,
      time: "2hr 43 mins",
      image: userProfile,
    },
  ];

  const listViewProps = [
    { title: "Recently Played", songs: RecentSongs, playlists: MyPlaylists },
    { title: "My Playlists", songs: RecentSongs, playlists: MyPlaylists },
  ];

  return (
    <div className="flex flex-col w-[350px] h-full bg-[#0A0A0A] gap-6">
      <div className="flex justify-between items-start w-full p-4">
        <div className="flex items-center justify-start gap-2">
          <Image
            src={userProfile}
            alt="User Profile Pic"
            className="w-[24px] h-[24px] rounded-full object-cover"
            style={{
              width: "24px",
              height: "24px",
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
