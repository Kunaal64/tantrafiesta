import EventsGridExtended from "@/components/bytes/EventsGridExtended";

/**
 * Events Page
 * 
 * Dedicated page for listing all events.
 * Uses `EventsGridExtended` to display a detailed grid of all available events.
 */
const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <div className="mt-24">
        <EventsGridExtended />
      </div>
    </div>
  );
};

export default page;

