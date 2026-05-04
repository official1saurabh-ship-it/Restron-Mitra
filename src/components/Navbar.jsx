import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  CreditCard,
  LifeBuoy,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Restron from '../assets/Restron.png';
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Pricing', path: '/pricing', icon: CreditCard },
    { name: 'Support', path: '/support', icon: LifeBuoy },
  ];

  // Helper function to determine if a link is active
  const checkActive = (itemPath) => {
    if (itemPath.startsWith('#')) {
      return location.hash === itemPath;
    }
    return location.pathname === itemPath;
  };

  // Ensure component is mounted before checking location
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="h-full flex items-center">
            <Link to="/" >
              <img src={Restron} alt="" className='h-16 w-auto object-contain' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-gray-100/50 p-1 rounded-2xl border border-saas-border">
            {navItems.map((item) => {
              const isActive = checkActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 lg:px-6 py-2 rounded-xl text-sm font-bold transition-colors duration-300 ${isActive
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                    }`}
                >
                  {/* Active pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-xl bg-saas-accent shadow-lg shadow-saas-accent/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <button className="text-gray-500 hover:text-gray-900 font-bold text-sm px-3 lg:px-4 py-2 transition-colors active:scale-95">
              <a href="https://restaurants.biosoftech.in/login" > Login</a>
            </button>
            <button className="bg-saas-accent hover:bg-saas-accent/90 text-white px-4 lg:px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95">
              <button className="text-white hover:text-gray-900 font-bold text-sm px-3 lg:px-4 py-2 transition-colors active:scale-95">
                <a href="https://restaurants.biosoftech.in/register" > Register</a>
              </button>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-500 hover:text-saas-accent transition-colors active:scale-90"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-saas-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = checkActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold transition-colors ${isActive
                      ? 'bg-saas-accent/10 text-saas-accent'
                      : 'text-gray-500 hover:bg-gray-50'
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <button className="px-4 py-3 rounded-xl border border-saas-border text-gray-900 font-bold text-sm active:bg-gray-50">
                  Login
                </button>
                <button className="px-4 py-3 rounded-xl bg-saas-accent text-white font-bold text-sm shadow-lg active:scale-95">
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;