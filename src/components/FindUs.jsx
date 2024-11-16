import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div className="mt-5">
            <h1 className="text-xl font-bold mb-3">Find Us On</h1>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn justify-start  join-item " > <FaFacebook></FaFacebook>Facebook</button>
                <button className="btn justify-start join-item"> <FaTwitter></FaTwitter> Twitter</button>
                <button className="btn justify-start join-item"> <FaInstagram></FaInstagram> Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;