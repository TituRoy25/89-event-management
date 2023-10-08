import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <div className="py-8">
                <Outlet></Outlet>
            </div>
            {/* footer */}
        </div>
    );
};

export default MainLayout;