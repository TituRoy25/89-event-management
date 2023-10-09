/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    // console.log(user);
    if(user){
        children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;