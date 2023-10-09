import { useContext, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import swal from 'sweetalert';


const Register = () => {
    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            setError("Minimum six characters, at least a capital letter & a special character");
        }
        else {
            setError("");
            if (email) {
                signUp(email, password).then(result => console.log(result.user))
                swal("Successful!", "You clicked the button!", "success");
            }
        }
    };

    return (
        <div>
            <h1 className="text-3xl justify-center text-center my10">Please Register</h1>
            <p className="mt-5 justify-center text-center my10">{error}</p>
            <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
                    <button onClick={handleRegister} className="btn btn-primary">Register</button>
                    <button className="btn btn-primary mt-2">Google Login</button>
                </div>
            </form>

        </div>
    );
};

export default Register;