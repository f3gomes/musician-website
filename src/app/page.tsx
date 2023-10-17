import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <div className="h-[700px]"></div>
    </main>
  );
}
