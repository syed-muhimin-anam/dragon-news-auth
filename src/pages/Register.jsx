import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider-auth/AuthProvider';

const Register = () => {
    const { setUser, createNewUser, updateUserProfile} = useContext (AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log({name, photo, email, password});

        // create user with email and password
        createNewUser(email, password)
        .then( res => {
            console.log(res.user);
            setUser(res.user);
            updateUserProfile({displayName: name, photoURL: photo})
            .then(() => {
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                
            })
         })
         .catch ( error => {
            console.log(error.message);
         })
        
    }

    return (
        <div className="min-h-screen  flex items-center justify-center">
        <div className="card bg-base-100 w-4/12 shrink-0 p-5">
        <h2 className="text-center text-2xl font-bold text-gray-500">Register your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
                <p>Have an account? <Link className="text-red-500" to={'/auth/login'}>Login</Link></p>
            </div>
        </form>
    </div>
    </div>
    );
};

export default Register;