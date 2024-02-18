"use client";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
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

const iconStyle = {
  color: "white",
  fontSize: "1.75em",
  cursor: "pointer",
  flexShrink: 0,
};
const collapseStyle = { display: "none" };
const iconStyleSmall = { color: "white", fontSize: "1.25rem" };
const iconStyleSmallActive = { color: "blue", fontSize: "1.25em" };

const features: NavItem[] = [
  { id: 1, name: "Home", icon: <BiSolidHome style={iconStyleSmallActive} /> },
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
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    console.log("hora");
    setCollapse(!collapse);
  };
  return (
    <div
      className={`${
        collapse ? "w-[60px]" : "w-[230px]"
      } flex flex-col h-full bg-[#101011] gap-8 flex-shrink-0 ease-in duration-300 pt-6`}
    >
      <div className="flex items-center justify-between py-4 px-4 w-full">
        <FaSpotify style={collapse ? collapseStyle : iconStyle} />
        {!collapse ? (
          <AiOutlineMenuFold style={iconStyle} onClick={handleCollapse} />
        ) : (
          <AiOutlineMenuUnfold style={iconStyle} onClick={handleCollapse} />
        )}
      </div>
      <NavList title="FEATURES" data={features} collapse={collapse} />
      <NavList title="LIBRARY" data={library} collapse={collapse} />
    </div>
  );
}
