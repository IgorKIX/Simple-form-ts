import React, { ReactNode, useEffect, useState } from "react";
import eventService from "../service/event.service";

type Props = {
  children: ReactNode;
};

export const EventContext = React.createContext<TEventContext | null>(null);

const EventsProvider = ({ children }: Props) => {
  const [events, setEvents] = useState([] as IEvent[]);

  useEffect(() => {
    eventService
      .getAll()
      .then((initialEventsList) => {
        // Log to see what cames from backend
        console.log("Initial events list from backend: ", initialEventsList);
        if (Array.isArray(initialEventsList)) {
          setEvents(initialEventsList);
          return;
        }
        console.error(
          "Error during getting the data about events from the server"
        );
      })
      .catch((err) => {
        setEvents([]);
        console.error(err);
      });
  }, []);

  const addEvent = (event: PreEvent) => {
    eventService
      .create(event)
      .then((createdEvent) => {
        console.log("Created event: ", createdEvent);
        setEvents([...events, createdEvent]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventsProvider;
