import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider-auth/AuthProvider";


const Login = () => {
    const {userLogIn, setUser} = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    

    
    const handleSubmit = (e) => {
      

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogIn(email, password)
        .then(res => {
            console.log(res);
            setUser(res.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch((err) => {
            setError({...error , login:err.code})
        })
        
    }


    return (
        <div className="min-h-screen  flex items-center justify-center">
            <div className="card bg-base-100 w-4/12 shrink-0 p-5">
            <h2 className="text-center text-2xl font-bold text-gray-500">Login your Account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    {
                        error.login && (<p className="text-red-500 text-sm">{error.login}</p>)
                    }
                    
                    <button className="btn btn-neutral">Login</button>
                    <p>Don't have an account? <Link className="text-red-500" to={'/auth/registration'}>Register</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;