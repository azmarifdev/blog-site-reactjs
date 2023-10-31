import React from 'react';

const Banner = () => {
    return (
        <div className="px-4 py-32 bg-black mx-auto">
            <div className="text-white text-center">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
                    Welcome to Our Blog
                </h1>
                <p className="lg:w-3/5 text-gray-100 mx-auto mb-5 font-primary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sapiente ipsa repellendus aperiam. Distinctio praesentium
                    exercitationem dicta, veritatis dolore error minus
                </p>
            </div>
        </div>
    );
};           

export default Banner;