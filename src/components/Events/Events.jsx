import EventsCard from "./EventsCard";


const Events = ({events}) => {
    console.log(events);
    return (
        <div>
            <h1 className="text-2xl py-5 text-center">Event Categories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                {
                    events?.map(event=> <EventsCard key={event.id} event={event}></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Events;