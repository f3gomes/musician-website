import { IEvent } from "../EventBox";
import { RiMapPin2Fill } from "react-icons/ri";

export function EventCard(event: IEvent) {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:pt-3 xl:pb-3 xl:py-3 last-of-type:border-none first-of-type:pt-0">
      <div className="flex flex-col xl:flex-row items-center gap-x-4">
        <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
          <div className="text-[33px] font-black text-accent-default">
            {event.date.day}
          </div>
          <div className="text-[20px] font-extrabold">{event.date.month}</div>
        </div>

        <div className="w-64 flex flex-col gap-y-2">
          <div className="text-lg leading-none font-bold">
            {event.location.city}, {event.location.country}
          </div>
          <div className="flex items-center gap-x-1 justify-center xl:justify-start">
            <div className="text-accent-default text-lg">
              <RiMapPin2Fill />
            </div>
            <div className="font-light">{event.location.address}</div>
          </div>
        </div>
      </div>

      <div className="w-[100px] text-[17px] text-center text-accent-default font-bold">
        {event.priceRange}
      </div>
      <button className="btn btn-sm btn-accent">Get tickets</button>
    </div>
  );
}
