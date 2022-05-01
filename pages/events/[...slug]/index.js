import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventsList from "../../../components/events/eventsList";
import ResultsTitle from "../../../components/events/resultsTitle";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/errorAlert";

const Index = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const year = Number(filteredData[0]);
  const month = Number(filteredData[1]);
  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2020 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Please enter Valid Data</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Go Back</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({ year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found :(</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Go Back</Button>
        </div>
      </>
    );
  }
  const date = new Date(year, month - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
};

export default Index;
