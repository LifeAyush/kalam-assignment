import Image from "next/image"
import bannerImage from "../../assets/bannerImage.png";

export default function Banner(){
    return(<div className="flex gap-8 items-center justify-center rounded-lg bg-[#FF47C5] w-full">
        <div className="flex flex-col items-start gap-6">
            <div className="text-white font-normal">New Album</div>
            <div className="text-white font-bold">THE SECOND STEP:</div>
            <div className="text-white font-bold">CHAPTER ONE</div>
            <div className="text-black font-bold">TREASURE</div>
            <div className="p-4 rounded-lg bg-[#0066F5] text-white font-normal cursor-pointer">
                LISTEN NOW
            </div>
        </div>
        <Image src={bannerImage} alt="Banner Image" className="h-[80%] object-contain"/>
    </div>)
}