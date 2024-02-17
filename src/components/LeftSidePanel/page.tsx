import { FaSpotify } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { FiCompass } from "react-icons/fi";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { RxDownload } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { LiaFileSolid } from "react-icons/lia";


export default function LeftSidePanel() {
  const iconStyle = { color: "white", fontSize: "2em", cursor: "pointer" };
  const iconStyleSmall = { color: "white", fontSize: "1.25em" };
  const features = [
    {
      id: 1,
      name: "Home",
      icon: <BiSolidHome style={iconStyleSmall} />,
    },
    {
      id: 2,
      name: "Discover",
      icon: <FiCompass style={iconStyleSmall} />,
    },
    {
      id: 3,
      name: "Collections",
      icon: <MdOutlineLibraryMusic style={iconStyleSmall} />,
    },
  ];
  const library = [
    {
      id: 1,
      name: "Download",
      icon: <RxDownload style={iconStyleSmall} />,
    },
    {
      id: 2,
      name: "Favourites",
      icon: <FaRegHeart style={iconStyleSmall} />,
    },
    {
      id: 3,
      name: "Local Files",
      icon: <LiaFileSolid style={iconStyleSmall} />,
    },
  ];
  return (
    <div className="flex flex-col w-[300px] h-full bg-[#101011] gap-8">
      <div className="flex items-center justify-between py-4 px-4 w-full">
        <FaSpotify style={iconStyle} />
        <MdOutlineMenuOpen style={iconStyle} />
      </div>
      <div className="flex flex-col gap-1 items-start justify-start px-4">
        <div className="text-white font-['Arial'] font-normal">FEATURES</div>
        <div>
          {features.map((item) => {
            return (
              <div
                className="flex gap-4 items-start cursor-pointer w-full py-2"
                key={item.id}
              >
                {item.icon}
                <div className="text-white font-['Arial'] font-normal">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start px-4">
        <div className="text-white font-['Arial'] font-normal">LIBRARY</div>
        <div>
          {library.map((item) => {
            return (
              <div
                className="flex gap-4 items-start cursor-pointer w-full py-2"
                key={item.id}
              >
                {item.icon}
                <div className="text-white font-['Arial'] font-normal">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
