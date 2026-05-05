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
    { name: 'Support', path: '/contact', icon: LifeBuoy },
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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
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
            <a 
              href="https://restaurants.biosoftech.in/login" 
              className="text-gray-600 hover:text-saas-accent font-bold text-sm px-4 py-2 transition-colors"
            >
              Login
            </a>
            <a 
              href="https://restaurants.biosoftech.in/register" 
              className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-600 hover:text-saas-accent transition-all active:scale-90 rounded-lg bg-gray-50"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1] md:hidden"
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
              className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-gray-200 shadow-2xl overflow-hidden z-50"
            >
              <div className="px-6 pt-4 pb-8 space-y-2">
                {navItems.map((item) => {
                  const isActive = checkActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all ${isActive
                        ? 'bg-saas-accent/10 text-saas-accent'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-saas-accent' : 'text-gray-400'}`} />
                      <span className="text-base">{item.name}</span>
                    </Link>
                  );
                })}
                
                <div className="pt-6 grid grid-cols-1 gap-3">
                  <a 
                    href="https://restaurants.biosoftech.in/login"
                    className="flex items-center justify-center w-full px-4 py-4 rounded-2xl border border-gray-200 text-gray-700 font-bold text-base active:bg-gray-50 transition-colors"
                  >
                    Login to Account
                  </a>
                  <a 
                    href="https://restaurants.biosoftech.in/register"
                    className="flex items-center justify-center w-full px-4 py-4 rounded-2xl bg-saas-accent text-white font-bold text-base shadow-lg shadow-saas-accent/20 active:scale-[0.98] transition-all"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;