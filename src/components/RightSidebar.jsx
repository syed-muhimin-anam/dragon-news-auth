import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";


const RightSidebar = () => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-5">Login With</h1>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightSidebar;