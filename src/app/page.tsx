import LeftSidePanel from "@/components/LeftSidePanel/LeftSidePanel";
import MainArea from "@/components/MainArea/MainArea";
import RightSidePanel from "@/components/RightSidePanel/RightSidePanel";
import "./globals.css"
import MusicPlayer from "@/components/BottomPanel/BottomPanel";

export default function Home() {
  return (
    <main className="h-screen flex relative">
    {/* <main className="h-screen border-solid border-2 border-red-900"> */}
      <LeftSidePanel />
      <MainArea />
      <RightSidePanel />
      <MusicPlayer />
    </main>
  );
}
