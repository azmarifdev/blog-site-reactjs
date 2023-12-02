import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs`;
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, []);
    // console.log(blogs);
    return (
        <>
            <div>category blog</div>
            <div>
                <BlogCards blogs={blogs} />
            </div>
            <div>pagination</div>
        </>
    );
}

export default BlogsPage;
