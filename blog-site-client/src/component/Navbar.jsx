import React from 'react';

const Navbar = () => {
    const navItems = [
        { path: '/', link: 'Home' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/services', link: 'Services' },
        { path: '/about', link: 'About' },
        { path: '/contact', link: 'Contact' },
    ];
    return (
        <header>
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <a href={item.path}>{item.link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
