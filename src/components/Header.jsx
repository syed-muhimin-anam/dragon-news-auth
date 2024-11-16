import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center items-center gap-y-5 pt-3">
            <div className="logo text-center space-y-3">
                <img src={logo} alt="" />
                <h1 className="text-gray-500 text-xl">Journalism Without Fear or Favour</h1>
                <p>{moment().format("dddd, MMMM-DD, YYYY")}</p>
            </div>


           
        </div>
    );
};

export default Header;