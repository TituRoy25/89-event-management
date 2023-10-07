import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            }
        ]
    }
])

export default myCreatedRoute;