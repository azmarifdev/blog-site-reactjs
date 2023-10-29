import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const navItems = [
        { path: '/', link: 'Home' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/services', link: 'Services' },
        { path: '/about', link: 'About' },
        { path: '/contact', link: 'Contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl text-white font-bold">
                    Blog <span className="text-orange-500">JS</span>
                </a>
                <ul className="md:flex gap-12 text-lg hidden">
                    {navItems.map(({ path, link }) => (
                        <li key={path} className="text-white">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                                to={path}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="lg:flex gap-4 text-white items-center hidden">
                    <a href="/" className="hover:text-orange-500 text-lg">
                        <BiLogoFacebookCircle />
                    </a>
                    <a href="/" className="hover:text-orange-500 text-lg">
                        <BiLogoGithub />
                    </a>
                    <a href="/" className="hover:text-orange-500 text-lg">
                        <BiLogoYoutube />
                    </a>
                    <button className="bg-orange-500 text-white px-5 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in-out">
                        Log in
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenuOpen} className="cursor-pointer">
                        {isMenuOpen ? (
                            <FaXmark className="w-5 h-5 text-white" />
                        ) : (
                            <BiMenu className="w-5 h-5 text-white" />
                        )}
                    </button>
                </div>
            </nav>
            <div>
                <ul
                    className={`md:hidden gap-12 text-lg block space-y-6 px-4 py-6 mt-14 bg-white ${
                        isMenuOpen
                            ? 'fixed top-0 left-0 right-0 w-full transition-all duration-150 ease-in-out'
                            : 'hidden'
                    }`}>
                    {navItems.map(({ path, link }) => (
                        <li key={path} className="text-black">
                            <NavLink onClick={toggleMenuOpen} to={path}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
