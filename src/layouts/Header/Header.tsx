// src/components/Header/Header.jsx

import { BookOpenIcon } from '@heroicons/react/24/outline'; // Updated import path
import { Link } from 'react-router-dom';


// build a navigation link component


import React from 'react';

const NavItem = ({ text, link }) => {
  return (
    <Link to={link} className="text-gray-700 hover:text-gray-900 w-auto p-2">{text}</Link>
    // <a href={link} className="text-gray-700 hover:text-gray-900 w-auto p-2">{text}</a>
  );
};

const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="container mx-2 px-1 md:px-1 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <BookOpenIcon className="h-6 w-6 mr-2 text-gray-700" /> {/* Icon */}
          <a href="/" className="text-xl font-semibold text-gray-700">Education Hub</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavItem text="Home" link="/" />
          <NavItem text="Perfil" link="/profile" />
          <NavItem text="Reportes" link="/reports" />
        </div>
        {/* ... rest of your header ... */}
      </nav>
    </header>
  );
};

export default Header;
