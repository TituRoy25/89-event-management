import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";

const Login = () => {
    const { googleSignIn } = useContext(AuthContext);
    console.log(googleSignIn);
    return (
        <div>
            This is login page
        </div>
    );
};

export default Login;