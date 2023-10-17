import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import { Player } from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <div className="h-[700px]"></div>
    </main>
  );
}
