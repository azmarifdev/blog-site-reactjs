import React from 'react';
import BlogsPage from '../component/BlogsPage';

const Blogs = () => {
    return (
        <>
            <div className="px-4 py-32 bg-black mx-auto">
                <div className="text-white text-center">
                    <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
                        Welcome to Blog Page
                    </h1>
                </div>
            </div>
            <div>
                <BlogsPage />
            </div>
        </>
    );
};

export default Blogs;
