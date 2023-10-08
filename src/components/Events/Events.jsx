import EventsCard from "./EventsCard";


// eslint-disable-next-line react/prop-types
const Events = ({events}) => {
    
    return (
        <div>
            <h1 className="text-2xl font-bold mt-10 text-center">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                {
                    // eslint-disable-next-line react/prop-types
                    events.map(event=> <EventsCard key={event.id} event={event}></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Events;