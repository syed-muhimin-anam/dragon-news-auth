import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CAtegoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);
    
    return (
        <div>
           <h1 className="text-xl font-bold mb-5">Dragon News Home</h1>
           <div className="space-y-5">
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}> </NewsCard>)
            }
           </div>
        </div>
    );
};

export default CAtegoryNews;