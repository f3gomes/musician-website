import { data } from "../../../../_data/db.js";
import { EventBox } from "@/components/EventBox/index.tsx";

export function Events() {
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <EventBox events={data.events} />
      </div>
    </section>
  );
}
