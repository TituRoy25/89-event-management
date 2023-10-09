import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Event from "../pages/Event/Event";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Detailes from "../pages/Detailes/Detailes";


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
                path : "/detailes",
                element : <Detailes></Detailes>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/events/:id",
                loader : () => fetch("/data.json"),
                element : <PrivateRoute><Event></Event></PrivateRoute>
                
            }
        ]
    }
])

export default myCreatedRoute;