import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { FaHome, FaBriefcase, FaUser, FaMoneyBill, FaBloggerB, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [drawerOpen, setDrawerOpen] = useState(false); // State variable for drawer visibility

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Close the drawer when the screen size changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [isMobile]);

  const navLinks = [
    { id: 1, name: 'HOME', icon: isMobile ? <FaHome className="mr-1 text-lg" /> : null },
    { id: 2, name: 'BRANDS', icon: isMobile ? <FaBriefcase className="mr-1 text-lg" /> : null },
    { id: 3, name: 'INFLUENCERS', icon: isMobile ? <FaUser className="mr-1 text-lg" /> : null },
    { id: 4, name: 'PRICING', icon: isMobile ? <FaMoneyBill className="mr-1 text-lg" /> : null },
    { id: 5, name: 'BLOGS', icon: isMobile ? <FaBloggerB className="mr-1 text-lg" /> : null },
    { id: 6, name: 'CONTACT', icon: isMobile ? <FaPhone className="mr-1 text-lg" /> : null },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="text-2xl font-bold ml-4">
          Logo
        </a>

        {isMobile ? ( // Render drawer if isMobile is true
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none focus:text-white"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H3.75ZM3.75 16.25C3.33579 16.25 3 16.5858 3 17C3 17.4142 3.33579 17.75 3.75 17.75H20.25C20.6642 17.75 21 17.4142 21 17C21 16.5858 20.6642 16.25 20.25 16.25H3.75Z"
                />
              </svg>
            </button>
            {drawerOpen && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50" onClick={closeDrawer}></div>
            )}
            <ul className={`absolute top-0 left-0 right-0 bg-gray-900 text-white py-4 px-2 transform ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out z-50`}>
              {navLinks.map((link) => (
                <li key={link.id} className="pr-2">
                  <a href="/" className="flex items-center py-2 px-4">
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="hidden md:flex items-center space-x-4 mr-4">
            {navLinks.map((link) => (
              <li key={link.id} className="pr-2">
                <a href="/" className="flex items-center">
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
