/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const EventCard = ({ findEvent }) => {
    console.log("card", findEvent);
    // eslint-disable-next-line no-unused-vars
    const { id, name, category, picture, description, price, card_bg_color, text_color } = findEvent;

    return (
        <div>
            <div style={{background: card_bg_color, color: text_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {name}
                    </h6>
                    <p style={{ color: text_color}} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Price : ${price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;