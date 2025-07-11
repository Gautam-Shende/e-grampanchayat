import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFileUpload, FaUser, FaFileAlt, FaSearch, FaHome, FaBars, FaTimes } from 'react-icons/fa';

const UserHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white rounded-xl dark:bg-gray-700 text-black dark:text-white w-full p-1 shadow-lg sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-green-400 ">
            User Services
          </span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-200 dark:bg-gray-800 dark:text-yellow-600 text-blue-600 shadow-inner'
                      : 'hover:bg-slate-200 duration-300 hover:dark:bg-gray-800 dark:hover:text-yellow-600 hover:text-blue-600'
                  }`
                }
              >
                <item.icon className="text-sm" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        )}
      </nav>

      {/* Mobile Slider Menu */}
      {isMobile && (
        <div className={`
          fixed inset-0 bg-opacity-75 z-40 mt-16
          transition-opacity duration-300 ease-in-out
          ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <div className={`
            bg-slate-100 dark:bg-gray-900 dark:text-white h-full w-4/5 max-w-xs ml-auto shadow-xl shadow-black
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col p-4 space-y-2 h-full">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-200 dark:bg-gray-800 text-blue-600 shadow-inner'
                        : 'hover:bg-slate-200 hover:dark:bg-gray-800 hover:text-blue-600'
                    }`
                  }
                >
                  <item.icon className="text-lg" />
                  <span className="text-lg font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const navItems = [
  { path: '/user/dashboard', icon: FaHome, label: 'Dashboard' },
  { path: '/user/profile', icon: FaUser, label: 'Profile' },
  { path: '/user/search', icon: FaSearch, label: 'Search' },
  { path: '/user/apply', icon: FaFileUpload, label: 'Apply' },
  { path: '/user/applications', icon: FaFileAlt, label: 'Applications' },
];

export default UserHeader;