import React from 'react';
import { Link } from 'react-router-dom';

function BlogCards({ blogs }) {
    const filterBlogs = blogs;
    console.log(filterBlogs);
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {filterBlogs.map((blog) => (
                <Link
                    key={blog.id}
                    className="rounded shadow-lg cursor-pointer p-5">
                    <div>
                        <img src={blog.image} className="w-full" alt="" />
                    </div>
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                        {blog.title}
                    </h3>
                    <p className="text-gray-600">{blog.author}</p>
                    <p className="text-sm text-gray-600">
                        Published Date: {blog.published_date}
                    </p>
                </Link>
            ))}
        </div>
    );
}

export default BlogCards;
