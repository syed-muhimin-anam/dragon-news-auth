import { FaGithub, FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div className='space-y-3'>
            <button className="btn btn-outline w-full"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="btn btn-outline w-full"><FaGithub></FaGithub> Login With Github</button>

        </div>
    );
};

export default SocialLogin;