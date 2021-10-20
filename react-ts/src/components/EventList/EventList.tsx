import React, {useContext} from "react";
import Event from "./components/Event";
import "./EventList.css";
import {UsersContext} from "../../context/userContext";
import {EventContext} from "../../context/eventContext";

const EventList = () => {
    const usersContext = useContext(UsersContext);
    const eventContext = useContext(EventContext);

    return (
        <div className='event-list-container'>
            {eventContext?.events.map((event) => {
                const organizer = usersContext?.users.find(
                    (user) => user._id === event.organizer
                );
                const eventDate = new Date(event.date).toLocaleString();
                return (
                    <Event
                        key={event._id}
                        organizer={organizer}
                        event={event}
                        eventDate={eventDate}
                    />
                );
            })}
        </div>
    );
};

export default EventList;
