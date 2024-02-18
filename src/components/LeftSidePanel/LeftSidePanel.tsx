import React from "react";
import { FaSpotify } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { FiCompass } from "react-icons/fi";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import NavList from "../NavList/NavList";

interface NavItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const iconStyle = { color: "white", fontSize: "2em", cursor: "pointer" };
const iconStyleSmall = { color: "white", fontSize: "1.25em" };

const features: NavItem[] = [
  { id: 1, name: "Home", icon: <BiSolidHome style={iconStyleSmall} /> },
  { id: 2, name: "Discover", icon: <FiCompass style={iconStyleSmall} /> },
  {
    id: 3,
    name: "Collections",
    icon: <MdOutlineLibraryMusic style={iconStyleSmall} />,
  },
];

const library: NavItem[] = [
  { id: 1, name: "Download", icon: <FiDownload style={iconStyleSmall} /> },
  { id: 2, name: "Favourites", icon: <FaRegHeart style={iconStyleSmall} /> },
  { id: 3, name: "Local Files", icon: <FaRegFile style={iconStyleSmall} /> },
];

export default function LeftSidePanel() {
  return (
    <div className="flex flex-col w-[250px] h-full bg-[#101011] gap-8 flex-shrink-0">
      <div className="flex items-center justify-between py-4 px-4 w-full">
        <FaSpotify style={iconStyle} />
        <MdOutlineMenuOpen style={iconStyle} />
      </div>
      <NavList title="FEATURES" data={features} />
      <NavList title="LIBRARY" data={library} />
    </div>
  );
}
