import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaUserShield,
  FaUserTie,
  FaSignInAlt,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AppContext } from "../../contexts/AppContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", 
      icon: <FaHome />, 
      text: "Home", 
      show: true
    },
    {
      to: "/user/login",
      icon: <FaSignInAlt />,
      text: "User Login",
      show: !user,
    },
    {
      to: "/staff/login",
      icon: <FaUserTie />,
      text: "Staff Login",
      show: !user,
    },
    {
      to: "/admin/login",
      icon: <FaUserShield />,
      text: "Admin Login",
      show: !user,
    },
    {
      to: `/${user?.role}/dashboard`,
      icon: <FaUser />,
      text: "Dashboard",
      show: !!user,
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-200 dark:bg-gray-800 text-black dark:text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://vhms.nic.in/img/goi.png"
              alt="Gram Panchayat Logo"
              className="h-10"
            />
            <motion.span
              className="text-xl text-[#FF5200] font-bold"
              whileHover={{ scale: 1.02 }}
            >
              Digital <span className="text-green-500">e-Gram Panchayat</span>
            </motion.span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(
              (link) =>
                link.show && (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                        isActive
                          ? "bg-gray-300 dark:bg-gray-900/50 text-blue-600"
                          : "hover:bg-gray-300 hover:dark:bg-gray-800 hover:text-blue-600"
                      }`
                    }
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.text}</span>
                  </NavLink>
                )
            )}

            {user && (
              <motion.button
                onClick={logout}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-900/50 hover:text-red-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSignOutAlt />
                <span>logout</span>
              </motion.button>
            )}

            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-300" />
              ) : (
                <FaMoon />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-2xl focus:outline-none hover:text-green-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navLinks.map(
                  (link) =>
                    link.show && (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg transition-all ${
                            isActive
                              ? "bg-slate-300 dark:bg-gray-900/50 text-blue-600"
                              : "hover:bg-slate-300 hover:dark:bg-gray-900/50 hover:text-blue-600"
                          }`
                        }
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{link.icon}</span>
                          <span>{link.text}</span>
                        </div>
                      </NavLink>
                    )
                )}

                {user && (
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-300 dark:hover:bg-gray-900/50 hover:text-red-500 transition-all flex items-center space-x-3"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                )}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-sm opacity-80">Switch Theme:</span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {theme === "dark" ? (
                      <FaSun className="text-yellow-300" />
                    ) : (
                      <FaMoon />
                    )}
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
