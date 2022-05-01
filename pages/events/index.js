import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/eventsList";
import EventsSearch from "../../components/events/eventsSearch";

const EventsListPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventsList events={events} />
    </div>
  );
};

export default EventsListPage;
