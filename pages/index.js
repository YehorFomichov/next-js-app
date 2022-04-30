import React from "react";
import Link from "next/link";
import { getAllEvents, getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/eventsList";

const MainPage = () => {
  const events = getAllEvents();
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="navbar-items">
            <Link href="/events/">
              <h2>Next Events</h2>
            </Link>
          </div>
          <div className="navbar-items">
            <Link href="/events/">
              <h2>Browse All Events</h2>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <EventsList events={events} />
      </div>
    </div>
  );
};

export default MainPage;
