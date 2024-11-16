import React from 'react';
import { FaEye, FaStar, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        total_view,
        rating,
        details,
    } = news;

    return (
        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 flex items-center justify-between bg-gray-100">
                <div className="flex items-center space-x-3">
                    <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-600">{new Date(author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex space-x-3 text-gray-500">
                    <FaBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <img src={image_url} alt="News" className="w-full object-cover rounded-md mb-4" />
                <p className="text-gray-700 mb-4">
                    {details.length > 100 ? `${details.substring(0, 100)}...` : details}
                    <Link to={`/news/${news._id}`} className="text-orange-500 cursor-pointer ml-2">Read More</Link >
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        
                        <span className="ml-2 text-gray-800 font-bold">{rating.number}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FaEye />
                        <span className="ml-1">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
