import React from "react";
import { getEventById } from "../../../dummy-data";
import { useRouter } from "next/router";

const CurrentEventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const currentEvent = getEventById(eventId);
  return <div>{currentEvent && currentEvent.title}</div>;
};

export default CurrentEventPage;
