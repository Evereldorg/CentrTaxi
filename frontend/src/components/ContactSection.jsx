import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaViber, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';

const ContactSection = () => {
  const benefits = [
    "Экономить на аренде и направлять эти средства на улучшение сервиса для наших водителей",
    "Работать быстрее и удобнее - все вопросы решаются дистанционно",
    "Следовать мировым трендам цифровизации услуг"
  ];

  const contacts = [
    {
      number: "+7 921 993-00-06", 
      role: "Алексей (руководитель)"
    },
    {
      number: "+7 965 016 71 88",
      role: "Дмитрий (техподдержка)"
    }
  ];

  // Варианты анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8 
      } 
    }
  };

  // Настройки для viewport
  const viewportSettings = {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  };

  return (
    <section 
      id="contact"
      className="w-full min-h-screen snap-start bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col pt-16"
    >
      {/* Мобильная версия (до 768px) */}
      <div className="md:hidden flex-1 w-full px-4 py-2 overflow-y-auto">
        <motion.div
          className="text-center mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInVariants}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-1">Связаться с нами</h2>
          <p className="text-gray-600 text-xs">
            <span className="text-yellow-500">Центр подключения</span> работает онлайн
          </p>
        </motion.div>

        <motion.ul 
          className="mb-4 space-y-1 text-xs px-1"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={containerVariants}
        >
          {benefits.map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              variants={itemVariants}
            >
              <span className="text-yellow-500 mr-1 mt-0.5">•</span>
              <span className="text-gray-700">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div 
          className="space-y-2 mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={containerVariants}
        >
          {contacts.map((contact, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-xs p-2 border border-gray-200"
              variants={itemVariants}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-gray-500 text-2xs">{contact.role}</span>
                <div className="flex gap-1">
                  <FaWhatsapp className="text-green-500" size={14} />
                  <FaViber className="text-purple-600" size={14} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{contact.number}</span>
                <button className="bg-yellow-400 text-gray-900 text-2xs py-0.5 px-2 rounded flex items-center">
                  <FaPhoneAlt size={10} className="mr-0.5" />
                  <span>Позвонить</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-xs p-2 border border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={itemVariants}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <FaEnvelope className="text-yellow-500 flex-shrink-0" size={12} />
            <a 
              href="mailto:info@taxi-driver.ru" 
              className="text-gray-700 text-xs hover:text-blue-600 transition-colors"
            >
              info@taxi-driver.ru
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500 flex-shrink-0" size={12} />
            <span className="text-gray-700 text-xs">Санкт-Петербург</span>
          </div>
        </motion.div>
      </div>

      {/* Версия для ноутбуков (768px-1279px) */}
      <div className="hidden md:block lg:hidden w-full px-5 py-4 flex-1 flex flex-col">
        <div className="container mx-auto max-w-3xl h-full flex flex-col">
          <motion.div 
            className="text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInVariants}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Связаться с нами</h2>
            <p className="text-gray-600 text-sm">
              <span className="text-yellow-500 font-medium">Центр подключения водителей</span> работает онлайн
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-3 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-xs p-3 border border-gray-200"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2 text-sm">{index + 1}.</span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
            transition={{ delay: 0.3 }}
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-xs p-3 border border-gray-200"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-gray-500 text-xs">{contact.role}</span>
                  <div className="flex gap-2">
                    <FaWhatsapp className="text-green-500" size={16} />
                    <FaViber className="text-purple-600" size={16} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-900">{contact.number}</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs py-1 px-3 rounded flex items-center">
                    <FaPhoneAlt size={12} className="mr-1" />
                    Позвонить
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-xs p-4 border border-gray-200 mt-auto mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={itemVariants}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -2 }}
          >
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Другие контакты</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500 flex-shrink-0" size={16} />
                <a 
                  href="mailto:info@taxi-driver.ru" 
                  className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                >
                  info@taxi-driver.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500 flex-shrink-0" size={16} />
                <span className="text-gray-700 text-sm">Санкт-Петербург, Невский пр-т</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ПК версия (1280px+) */}
      <div className="hidden lg:block w-full px-8 py-8 flex-1 flex flex-col">
        <div className="container mx-auto max-w-5xl h-full flex flex-col">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Связаться с нами</h2>
            <p className="text-xl text-gray-600">
              <span className="text-yellow-500 font-medium">Центр подключения водителей</span> работает полностью онлайн
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 border border-gray-200"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-yellow-500 text-xl font-bold mb-2">{index + 1}.</div>
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 mt-auto mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={containerVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-5 border border-gray-200"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{contact.role}</h3>
                    </div>
                    <div className="flex gap-3">
                      <FaWhatsapp className="text-green-500" size={20} />
                      <FaViber className="text-purple-600" size={20} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{contact.number}</span>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg flex items-center gap-2">
                      <FaPhoneAlt size={14} /> Позвонить
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Другие способы связи</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-yellow-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Электронная почта</h4>
                    <a 
                      href="mailto:info@taxi-driver.ru" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      info@taxi-driver.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-yellow-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Адрес</h4>
                    <p className="text-gray-600">Санкт-Петербург, Невский пр-т</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Футер для всех версий */}
      <footer className="bg-gray-800 text-white w-full py-4 mt-auto">
        <div className="container mx-auto px-4">
          {/* Мобильная версия футера */}
          <div className="md:hidden">
            <div className="flex flex-col items-center text-center text-xs space-y-2">
              <p>© {new Date().getFullYear()} Центр подключения водителей</p>
              <div className="flex justify-center items-center space-x-2">
                <span>Все права защищены</span>
                <span>|</span>
                <span>Политика конфиденциальности</span>
              </div>
              <a 
                href="https://t.me/ваш_телеграм" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 hover:text-yellow-400 transition-colors"
              >
                <FaTelegram size={14} />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Версия футера для ноутбуков и ПК */}
          <div className="hidden md:block">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm md:text-base">
              <p>© {new Date().getFullYear()} Центр подключения водителей</p>
              <div className="hidden md:block h-4 w-px bg-gray-500"></div>
              <p>Все права защищены</p>
              <div className="hidden md:block h-4 w-px bg-gray-500"></div>
              <p>Политика конфиденциальности</p>
              <div className="hidden md:block h-4 w-px bg-gray-500"></div>
              <a 
                href="https://t.me/ваш_телеграм" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <FaTelegram size={18} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;