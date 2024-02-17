import LeftSidePanel from "@/components/LeftSidePanel/LeftSidePanel";
import RightSidePanel from "@/components/RightSidePanel/RightSidePanel";

export default function Home() {
  return (
    <main className="h-screen flex">
    {/* <main className="h-screen border-solid border-2 border-red-900"> */}
      <LeftSidePanel />
      <RightSidePanel />
    </main>
  );
}
