import { useLoaderData } from "react-router-dom";
import Events from "../../components/Events/Events";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {

    const events = useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <Events events = {events}></Events>
        </div>
    );
};

export default Home;