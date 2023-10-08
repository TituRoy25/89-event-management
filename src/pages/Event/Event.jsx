
import { useLoaderData, useParams } from "react-router-dom";
import EventCard from "./EventCard";


const Event = () => {

    const events = useLoaderData()
    const { id } = useParams()

    const findEvent = events.find((event) => event.id == id)

    return (
        <div>
            <EventCard findEvent={findEvent}></EventCard>
        </div>
    );
};

export default Event;