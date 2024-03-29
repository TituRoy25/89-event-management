import { useContext, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider";

const Login = () => {
    const { googleSignIn, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogle = () => {
        googleSignIn().then(result => {
            console.log(result.user);
        })
    }

    const handleLogin = () => {
        if (email, password) {
            signIn(email, password).then(result => {
                console.log(result.user);
            })
                .catch((err) => {
                    setError(err.massage);
                })
        }
    }
    

    return (
        <div>
            <h1 className="text-3xl justify-center text-center my10">Please Login</h1>
            <p className="justify-center text-center my10">{error}</p>
            <form  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                    <button onClick={handleGoogle} className="btn btn-primary mt-2">Google Login</button>
                    
                </div>
            </form>

        </div>
    );
};

export default Login;