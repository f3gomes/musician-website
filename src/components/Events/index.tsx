import { data } from "../../../_data/db.ts";
import { EventBox } from "@/components/EventBox/index.tsx";
import { SectionHeader } from "../SectionHeader/index.tsx";

export function Events() {
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        <EventBox events={data.events} />
      </div>
    </section>
  );
}
