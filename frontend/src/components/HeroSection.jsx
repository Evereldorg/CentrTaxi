import React from 'react';
import { FaMoneyBillWave, FaHandshake, FaMapMarkedAlt, FaLifeRing } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        delay: 1.2
      }
    }
  };

  return (
    <section 
      className="relative w-full h-screen snap-start" 
      ref={ref}
      style={{ 
        // Добавляем отступ сверху равный высоте навбара только на мобильных
        paddingTop: 'calc(env(safe-area-inset-top) + 0.7rem)',
        // На десктопах оставляем как было
        '@media (min-width: 768px)': {
          paddingTop: 0
        }
      }}
    >
      {/* Фоновое видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео фон.
      </video>

      {/* Анимированный блок с отступом для мобильных */}
      <div className="relative z-10 h-full flex items-center px-2 sm:px-4 md:px-4 lg:px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-md rounded-2xl text-gray-900 p-6 sm:p-8 md:p-10 max-w-xl w-full mx-auto lg:mx-0 border border-black/10 ring-1 ring-black/10 shadow-2xl"
          style={{
            // Дополнительный margin-top только на мобильных
            marginTop: '4rem',
            '@media (min-width: 768px)': {
              marginTop: 0
            }
          }}
        >
          {/* Остальной код остается без изменений */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Центр подключения водителей
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg mb-4 text-yellow-500 font-medium"
          >
            Санкт-Петербург
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed font-light"
          >
            Мы предлагаем водителям лучшие условия для работы. Присоединяйтесь к нам, чтобы получить стабильный доход, удобный график и множество бонусов.
          </motion.p>
          
          <motion.ul 
            variants={containerVariants}
            className="space-y-3 text-sm sm:text-base md:text-lg mb-6"
          >
            <motion.li 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <FaMoneyBillWave className="text-yellow-500 text-lg flex-shrink-0" />
              <span>Высокие тарифы и стабильный доход</span>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <FaHandshake className="text-yellow-500 text-lg flex-shrink-0" />
              <span>Подключение без скрытых комиссий</span>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <FaMapMarkedAlt className="text-yellow-500 text-lg flex-shrink-0" />
              <span>Поддержка в крупных городах и регионах</span>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <FaLifeRing className="text-yellow-500 text-lg flex-shrink-0" />
              <span>Оперативная помощь и обучение</span>
            </motion.li>
          </motion.ul>
          
          <motion.div 
            variants={buttonVariants}
            className="flex justify-center"
          >
            <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 shadow-md transform hover:scale-105">
              Подключиться
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;