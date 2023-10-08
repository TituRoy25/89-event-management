import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Event from "../pages/Event/Event";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch("/data.json")
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/events/:id",
                loader : () => fetch("/data.json"),
                element : <Event></Event>
                
            }
        ]
    }
])

export default myCreatedRoute;