import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const EventsCard = ({ event }) => {

    const { id, name, picture, short_description, price, card_bg_color, text_color } = event;

    return (
        <div>
            <div style={{ background: card_bg_color, color: text_color }} className="relative flex w-96 h-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-5">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full w-full object-cover "
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {name}
                        </p>
                    </div>
                    <p style={{ color: text_color }} className="block font-sans text-[15px] font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {short_description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/events/${id}`}>
                        <button
                            className="block bg-gray-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default EventsCard;