import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const MenuItem = ({ menu, path, isActive }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={path}
      className={`rounded-full px-6 py-2 transition-colors duration-300 ${
        isActive 
          ? "bg-[#e68369] text-white shadow-md" 
          : "text-[#e68369] hover:bg-[#e68369] hover:text-white"
      }`}
    >
      {menu}
    </Link>
  </motion.div>
);

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ["Home", "About Us", "Blog", "Plans"];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/api/placeholder/50/50" alt="Logo" className="w-12 h-12" />
          <span className="ml-2 text-2xl font-bold text-[#131842]">Coterra</span>
        </Link>

        <nav className="hidden md:flex space-x-4 items-center">
          {menuItems.map((menu, index) => {
            const path = menu === "Home" ? "/" : `/${menu.replace(/ /g, "-").toLowerCase()}`;
            const isActive = location.pathname === path;
            return <MenuItem key={index} menu={menu} path={path} isActive={isActive} />;
          })}
        </nav>

        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/join-us"
              className="rounded-full border-2 border-[#131842] bg-[#ecceae] px-6 py-2 font-bold text-[#131842] hover:bg-[#131842] hover:text-[#ecceae] transition-colors duration-300"
            >
              Join Us <ChevronRight className="inline-block ml-1" />
            </Link>
          </motion.div>
        </div>

        <button 
          className="md:hidden text-[#e68369]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-4">
            {menuItems.map((menu, index) => {
              const path = menu === "Home" ? "/" : `/${menu.replace(/ /g, "-").toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={index}
                  to={path}
                  className={`py-2 px-4 ${isActive ? "text-[#e68369] font-bold" : "text-[#131842]"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {menu}
                </Link>
              );
            })}
            <Link
              to="/join-us"
              className="mt-4 rounded-full border-2 border-[#131842] bg-[#ecceae] px-6 py-2 font-bold text-[#131842] text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Us
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};