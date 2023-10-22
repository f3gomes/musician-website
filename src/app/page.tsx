import { Albums } from "@/components/Albums";
import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import { Player } from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <div className="h-[700px]"></div>
    </main>
  );
}
