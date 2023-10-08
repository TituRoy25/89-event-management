

const Banner = () => {
    return (
        <div
            className="mt-5 hero h-[50vh]"
            style={{
                backgroundImage: "url(https://i.ibb.co/0ZRCdjf/banner.jpg)",
            }}
        >

            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="text-[#ef9ad1] text-4xl font-bold">
                        Event-Management
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;