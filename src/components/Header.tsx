import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Rooms", path: "/rooms" },
    { label: "Restaurants", path: "/restaurants" },
    { label: "Weddings & Events", path: "/weddings-meetings" },
    { label: "Activities", path: "/activities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className='absolute top-0 w-full z-50 transition-all duration-300 text-white pt-6 pb-4'>
      <div className='container mx-auto px-8'>
        <div className='flex items-center justify-between'>
          {/* Left Links */}
          <div className='hidden lg:flex items-center space-x-8'>
            <Link
              to='/contact'
              className='flex items-center gap-2 text-xs tracking-widest hover:text-primary/80 transition-colors uppercase'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-current'></span>
              Enquire Now
            </Link>
            <Link
              to='/book'
              className='flex items-center gap-2 text-xs tracking-widest hover:text-primary/80 transition-colors uppercase'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-current'></span>
              Book Directly
            </Link>
          </div>

          {/* Center Logo */}
          <Link
            to='/'
            className='flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 group'
          >
            <span className='text-[10px] tracking-[0.3em] uppercase mb-1 opacity-80 group-hover:opacity-100 transition-opacity'>
              feel good resort
            </span>
            <span className='text-4xl font-thin tracking-wide font-serif group-hover:text-primary/90 transition-colors'>
              hermes
            </span>
          </Link>

          {/* Right Actions */}
          <div className='flex items-center justify-end space-x-8 ml-auto'>
            <Link
              to='/rooms'
              className='hidden lg:flex items-center gap-2 text-xs tracking-widest hover:text-primary/80 transition-colors uppercase'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-current'></span>
              Rooms & Suites
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 hover:text-primary/80 transition-colors relative z-[60]'
            >
              <div className='flex flex-col justify-center items-center w-8 h-6 gap-1.5'>
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  className='block w-8 h-0.5 bg-current origin-center'
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className='block w-8 h-0.5 bg-current'
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  className='block w-8 h-0.5 bg-current origin-center'
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center'
          >
            <nav className='text-center space-y-6'>
              {navItems.map((item) => (
                <div key={item.path} className='overflow-hidden'>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className='block text-3xl font-serif text-white hover:text-primary transition-colors'
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              <div className='h-px w-24 bg-white/20 mx-auto my-8' />

              {user ? (
                <div className='space-y-4'>
                  <Link
                    to='/my-bookings'
                    onClick={() => setIsMenuOpen(false)}
                    className='block text-xl text-white/80 hover:text-white transition-colors'
                  >
                    My Bookings
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className='text-xl text-white/80 hover:text-white transition-colors'
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to='/login'
                  onClick={() => setIsMenuOpen(false)}
                  className='block text-xl text-white/80 hover:text-white transition-colors'
                >
                  Login
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
