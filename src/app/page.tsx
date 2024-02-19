import LeftSidePanel from "@/components/Panel/LeftSidePanel/LeftSidePanel";
import MainArea from "@/components/MainArea/MainArea";
import RightSidePanel from "@/components/Panel/RightSidePanel/RightSidePanel";
import MusicPlayer from "@/components/Panel/BottomPanel/BottomPanel";
import "@/app/globals.css";

export default function HomePage() {
  return (
    <main className="h-screen flex relative">
      <LeftSidePanel />
      <MainArea />
      <RightSidePanel />
      <MusicPlayer />
    </main>
  );
}
