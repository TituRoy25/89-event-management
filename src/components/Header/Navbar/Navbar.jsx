import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    // console.log(user,);

    const handleLogout = () => {
        logout().then()
    }

    return (
        <div>
            <nav className="flex justify-between items-center py-5 px-2 shadow-md">
                <h1 className="text-2xl font-bold  box-content rounded">Social Events</h1>
                <ul className="flex gap-3">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#42abbe] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#42abbe] underline" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/detailes"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#42abbe] underline" : ""
                            }
                        >
                            Detailes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#42abbe] underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#42abbe] underline" : ""
                            }
                        >
                            Register
                        </NavLink>
                        {user && <button onClick={handleLogout} className=" bg-[#6ddbee] ml-3 rounded">Logout</button>}
                        {/* <p>{user?.email}</p> */}
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;