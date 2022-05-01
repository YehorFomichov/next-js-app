import React from "react";
import { getEventById } from "../../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../../../components/event-detail/eventSummary";
import EventLogistics from "../../../components/event-detail/eventLogistics";
import EventContent from "../../../components/event-detail/eventContent";

const CurrentEventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  if (!event) {
    return <p>Cannot find this event</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default CurrentEventPage;
