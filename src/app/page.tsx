import { Albums } from "@/components/Albums";
import { Blog } from "@/components/Blog";
import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { Player } from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
    </main>
  );
}
