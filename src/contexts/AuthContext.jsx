// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isStaffAuthenticated, setIsStaffAuthenticated] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Initialize authentication state from storage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        
        if (parsedUser.role === 'admin') {
          setIsAdminAuthenticated(true);
        } else if (parsedUser.role === 'merchant') {
          setIsStaffAuthenticated(true);
        } else if (parsedUser.role === 'user') {
          setIsUserAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to parse user data', error);
        logout();
      }
    }
  }, []);

  // Admin registration
  const registerAdmin = (adminData) => {
    const userData = { ...adminData, role: 'admin' };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAdminAuthenticated(true);
    navigate('/admin/dashboard');
    return Promise.resolve(userData);
  };

  // Merchant registration
  const registerStaff = (merchantData) => {
    const userData = { ...merchantData, role: 'staff' };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsStaffAuthenticated(true);
    return Promise.resolve(userData);
  };

  // User registration
  const registerUser = (userData) => {
    const userWithRole = { ...userData, role: 'user' };
    localStorage.setItem('user', JSON.stringify(userWithRole));
    setUser(userWithRole);
    setIsUserAuthenticated(true);
    navigate('/user/dashboard');
    return Promise.resolve(userWithRole);
  };

  // Admin authentication
  const loginAdmin = (credentials) => {
    const userData = { ...credentials, role: 'admin' };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAdminAuthenticated(true);
    navigate('/admin/dashboard');
    return Promise.resolve(userData);
  };

  // Merchant authentication
  const loginStaff = (credentials) => {
    const userData = { ...credentials, role: 'staff' };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsStaffAuthenticated(true);
    navigate('/staff/dashboard');
    return Promise.resolve(userData);
  };

  // User authentication
  const loginUser = (credentials) => {
    const userData = { ...credentials, role: 'user' };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsUserAuthenticated(true);
    navigate('/user/dashboard');
    return Promise.resolve(userData);
  };

  // Universal logout
  const logout = () => {
    setUser(null);
    setIsAdminAuthenticated(false);
    setIsStaffAuthenticated(false);
    setIsUserAuthenticated(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAdminAuthenticated,
      isStaffAuthenticated,
      isUserAuthenticated,
      registerAdmin,
      registerStaff,
      registerUser,
      loginAdmin,
      loginStaff,
      loginUser,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};