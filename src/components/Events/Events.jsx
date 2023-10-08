import EventsCard from "./EventsCard";


const Events = ({events}) => {
    console.log(events);
    return (
        <div>
            <h1 className="text-2xl font-bold mt-10 text-center">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                {
                    events?.map(event=> <EventsCard key={event.id} event={event}></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Events;