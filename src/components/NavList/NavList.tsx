import React from "react";

interface NavItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface NavListProps {
  title: string;
  data: NavItem[];
}

const listItemStyle = {
  color: "white",
  fontFamily: "Arial",
  fontWeight: "normal",
};

export default function NavList({ title, data }: NavListProps) {
  return (
    <div className="flex flex-col gap-1 items-start justify-start px-4">
      <div className="text-white font-normal">{title}</div>
      <div className="flex flex-col items-start justify-start">
        {data.map((item) => (
          <div
            className="flex gap-4 items-start cursor-pointer w-full py-2"
            key={item.id}
          >
            {item.icon}
            <div style={listItemStyle}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
