import { Link } from "react-router-dom";
import userLogo from '../assets/user.png'
import { AuthContext } from "../provider-auth/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const {user, logOut} = useContext (AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="w-32"> <h1>{user && user.email}</h1></div>
            <div className="text-center space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-x-2 items-center">
                <div className="flex items-center gap-x-2">
                <img className="w-14 h-14 rounded-full  border-black p-1 border-4" src={user && user?.email ?  user.photoURL : userLogo} alt="" />
                <p>{user && user?.displayName}</p>
                </div>

            
            {
                user && user?.email ? <button onClick={logOut} className="btn w-32 rounded-none   btn-neutral">Logout</button> : <Link to='/auth/login' className="btn w-32 rounded-none   btn-neutral">Login</Link>
            }
                
            </div>
        </div>
    );
};

export default Navbar;