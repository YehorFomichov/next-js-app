import React from "react";
import EventItem from "./eventItem";
import styles from "./eventList.module.css";
const EventsList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          image={event.image}
          location={event.location}
          title={event.title}
          date={event.date}
          id={event.id}
        />
      ))}
    </ul>
  );
};

export default EventsList;
