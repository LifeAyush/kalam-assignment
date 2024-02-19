"use client";
import React, { useState } from "react";

interface NavItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface NavListProps {
  title: string;
  data: NavItem[];
  collapse: boolean;
  defaultActive?: string;
}

const listItemStyle: React.CSSProperties = {
  color: "white",
  fontFamily: "Arial",
  fontWeight: "normal",
};
const listItemActiveStyle: React.CSSProperties = {
  color: "blue",
  fontFamily: "Arial",
  fontWeight: "normal",
};
const collapseStyle: React.CSSProperties = {
  display: "none",
};

export default function NavList({
  title,
  data,
  collapse,
  defaultActive = "Home",
}: NavListProps) {
  const [active, setActive] = useState(defaultActive);
  return (
    <div className="flex flex-col gap-1 items-start justify-start">
      <div
        className={
          collapse
            ? "hidden"
            : "text-[#b3b3b3] font-['Arial'] font-normal text-xs px-4"
        }
      >
        {title}
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        {data.map((item) => (
          <div
            className={`flex ${
              collapse ? "gap-0 justify-center" : "gap-4"
            } items-start cursor-pointer w-full py-2 px-4 hover:bg-[#242424]`}
            key={item.id}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <div
              style={
                collapse
                  ? collapseStyle
                  : active === item.name
                  ? listItemActiveStyle
                  : listItemStyle
              }
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
