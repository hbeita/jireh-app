// src/components/Sidebar/Sidebar.jsx

import React, { useState } from 'react';
import { MapIcon, LockClosedIcon } from '@heroicons/react/24/outline'; // Import from Heroicons v2
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-screen'>
            {/* Hamburger Icon for Mobile */}
            <div className="text-gray-700 p-4 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <LockClosedIcon className="h-6 w-6" /> : <MapIcon className="h-6 w-6" />}
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-30 transform bg-gray-100 overflow-y-auto h-screen transition duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:w-64`}>
                {/* Sidebar content */}
                <nav className="md:mt-0">
                    <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">
                        Dashboard
                    </Link>
                    <Link to="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">
                        Reportes
                    </Link>
                    <Link to="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">
                        Perfil
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
