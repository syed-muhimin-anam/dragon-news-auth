import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-x-3 bg-base-200 p-2">
            <p className="bg-red-600 px-3 py-2 text-white">Latest</p>
            
            <Marquee pauseOnHover={true} speed={60} className="space-x-2">
                <Link to='news'> # Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Link>
                <Link to='news'> # Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Link>
                <Link to='news'> # Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;