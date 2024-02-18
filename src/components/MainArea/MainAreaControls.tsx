import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { TfiMoreAlt } from "react-icons/tfi";

const iconStyleSmall = {
  color: "white",
  fontSize: "1.5em",
  cursor: "pointer",
};
const iconStyleSearch = {
  color: "#343537",
  fontSize: "1.25em",
  cursor: "pointer",
};

export default function MainAreaControls() {
  return (
    <div className="flex w-full gap-6 items-center sticky top-0 left-0 bg-[#18191B] pt-8 pb-1">
      <div className="flex items-center gap-2">
        <IoIosArrowBack style={iconStyleSmall} />
        <IoIosArrowForward style={iconStyleSmall} />
      </div>
      <div className="flex w-full bg-[#EAEAEB] p-3 items-center rounded-3xl gap-3">
        <FiSearch style={iconStyleSearch} />
        <input
          type="text"
          placeholder="Search for artists, songs, or albums"
          className="w-full bg-[#EAEAEB] border-none outline-none"
        />
      </div>
      <TfiMoreAlt style={iconStyleSmall} />
    </div>
  );
}
