import React from "react";
import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/eventsList";

const MainPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default MainPage;
