import React from 'react';
import { FaCity, FaMoneyBillWave, FaCarSide, FaStar } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const tariffs = [
  {
    prefix: 'Вся Россия-1',
    description: '80 рублей в сутки во всех городах кроме МСК, СПб, Новосибирска, Екатеринбурга, Казани.',
    icon: <FaCity className="text-7xl text-black" />,
    isHit: true,
  },
  {
    prefix: 'Вся Россия-2',
    description: '7 рублей с заказа во всех городах России, кроме крупных мегаполисов.',
    icon: <FaMoneyBillWave className="text-7xl text-black" />,
  },
  {
    prefix: 'Водитель Москва-Санкт-Петербург',
    description: '3% с заказа в крупных городах, помощь с документами и бухгалтерией.',
    icon: <FaCarSide className="text-7xl text-black" />,
  },
];

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const titleControls = useAnimation();
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [controls, inView, titleControls, titleInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
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

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen w-full flex flex-col items-center justify-start px-4 md:px-10 pt-20 md:pt-28 pb-10 bg-white text-black snap-start"
      ref={ref}
    >
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        className="mb-8 md:mb-16 text-center"
      >
        <motion.h2 
          variants={titleVariants}
          className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] relative pb-2"
        >
          Тарифы и условия
          <motion.span
            variants={underlineVariants}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1.5 bg-yellow-400 rounded-full w-2/5 origin-center"
            style={{ bottom: '-4px' }}
          />
        </motion.h2>
      </motion.div>

      {/* Desktop Version */}
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="hidden md:flex w-full max-w-7xl h-full items-stretch justify-between gap-6"
        style={{ minHeight: '65vh' }}
      >
        {tariffs.map((tariff, index) => (
          <div 
            key={index}
            className="relative group flex-1 min-w-0"
          >
            {tariff.isHit && (
              <motion.div 
                className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                initial={{ scale: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <FaStar className="text-yellow-400 stroke-black stroke-[3px] text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
                <span className="text-sm font-bold text-black bg-white px-3 py-1 rounded-full shadow">ХИТ</span>
              </motion.div>
            )}
            <motion.div
              className="bg-yellow-300 rounded-2xl flex flex-col justify-between p-8 text-center shadow-xl w-full border border-black/10 h-full"
              style={{ 
                backfaceVisibility: 'hidden',
                minHeight: '500px'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-semibold mb-1"
                  >
                    Тариф
                  </motion.h3>
                  <motion.h4
                    variants={itemVariants}
                    className="text-3xl font-bold mb-6"
                  >
                    «{tariff.prefix}»
                  </motion.h4>
                </div>
                <motion.p
                  variants={itemVariants}
                  className="text-lg mb-8 leading-snug px-4"
                >
                  {tariff.description}
                </motion.p>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-center mb-8"
                >
                  {tariff.icon}
                </motion.div>
                <motion.button
                  variants={itemVariants}
                  className="bg-black text-white px-6 py-3 rounded-full mx-auto w-full max-w-xs hover:scale-110 transition-transform duration-200 hover:shadow-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  Подключиться
                </motion.button>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Mobile Carousel */}
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="md:hidden w-full overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory px-2 pb-4"
        style={{ 
          height: 'auto',
          marginTop: '1rem',
          marginBottom: '2rem'
        }}
      >
        <div className="flex gap-4">
          {tariffs.map((tariff, index) => (
            <motion.div
              key={index}
              className="relative bg-yellow-300 rounded-2xl w-[85vw] p-6 flex-shrink-0 text-center shadow-lg snap-center flex flex-col justify-between"
              style={{ height: '60vh' }}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
            >
              {tariff.isHit && (
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <FaStar className="text-yellow-400 stroke-black stroke-[2px] text-2xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="text-xs font-bold text-black">ХИТ</span>
                </div>
              )}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <motion.h3
                    variants={itemVariants}
                    className="text-xl font-semibold mb-1"
                  >
                    Тариф
                  </motion.h3>
                  <motion.h4
                    variants={itemVariants}
                    className="text-2xl font-bold mb-3"
                  >
                    «{tariff.prefix}»
                  </motion.h4>
                </div>
                <motion.p
                  variants={itemVariants}
                  className="text-sm mb-4 px-2"
                >
                  {tariff.description}
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center mb-4"
                >
                  {tariff.icon}
                </motion.div>
                <motion.button
                  variants={itemVariants}
                  className="bg-black text-white px-4 py-2 rounded-full mx-auto w-full max-w-xs active:scale-105 transition-transform duration-100 active:shadow-md"
                >
                  Подключиться
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;