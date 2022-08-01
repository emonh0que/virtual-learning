import React from 'react';
import Blog from '../Blog/Blog';
import './BlogContainer.css';
const BlogContainer = () => {
    return (
        <div className='blog-container'>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    );
};

export default BlogContainer;