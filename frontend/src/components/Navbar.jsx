import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "hero", text: "Главная" },
    { id: "fleet", text: "Услуги" },
    { id: "about", text: "О нас" },
    { id: "services", text: "Тарифы" },
    { id: "news", text: "Новости" },
    { id: "contact", text: "Контакты" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 py-3 px-4 flex justify-between items-center">
      {/* Логотип и название с городом */}
      <div className="flex items-center space-x-3">
        {/* Заменяем круг с буквами на логотип */}
        <img 
          src="/logo.jpg" 
          alt="Логотип Центра подключения водителей" 
          className="h-9 w-auto" 
        />
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-semibold leading-tight">
            Центр подключения водителей
          </span>
          <span className="text-xs text-gray-600 leading-tight">Санкт-Петербург</span>
        </div>
      </div>

      {/* Десктопное меню */}
      <div className="hidden md:flex space-x-5">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-sm font-medium hover:underline hover:text-yellow-500 transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>

      {/* Мобильное меню - кнопка бургера */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Мобильное меню - содержимое */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-4 py-3"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm font-medium py-1 hover:underline hover:text-yellow-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;