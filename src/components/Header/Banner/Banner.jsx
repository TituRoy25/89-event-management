

const Banner = () => {
    return (
        <div
            className="mt-5 hero h-[50vh]"
            style={{
                backgroundImage: "url(https://i.ibb.co/0ZRCdjf/banner.jpg)",
            }}
        >

            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-[#f981cf] text-3xl font-bold">
                        Event-Management
                    </h1>

                    <div className="flex justify-center items-center mt-5">
                        <input
                            type="text"
                            placeholder="Search here...."
                            className="input  rounded-r-none w-full max-w-xs"
                        />
                        <button className="btn btn-primary rounded-l-none">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;