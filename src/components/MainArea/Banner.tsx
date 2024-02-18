import Image from "next/image";
import bannerImage from "../../assets/bannerImage.png";

export default function Banner() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-[#FF47C5] w-full p-12">
      <div className="flex flex-col items-start gap-5">
        <div className="text-white font-normal">New Album</div>
        <div className="text-white font-bold text-5xl">THE SECOND STEP:</div>
        <div className="text-white font-bold text-5xl">CHAPTER ONE</div>
        <div className="text-black font-['Arial'] font-bold text-xl">TREASURE</div>
        <div className="p-4 rounded-lg bg-[#0066F5] text-white font-['Arial'] font-bold cursor-pointer">
          LISTEN NOW
        </div>
      </div>
      <Image
        src={bannerImage}
        alt="Banner Image"
        className="w-[42%] object-contain"
      />
    </div>
  );
}
