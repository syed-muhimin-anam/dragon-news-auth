import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category ))  // Access the categories array
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className='text-xl font-bold mb-5'>All Category</h1>
            <div className='flex flex-col gap-y-3'>
                {
                    categories.map((category) => (
                        <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn'>{category.category_name}</NavLink> // Display actual category name
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSidebar;
