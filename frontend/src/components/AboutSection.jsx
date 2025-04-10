import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaHandHoldingUsd, FaHeadset, FaFileAlt, FaCar, FaUserCheck } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { id: 1, icon: <FaRocket size={48} />, title: "Мгновенное подключение", description: "Начните зарабатывать уже сегодня." },
  { id: 2, icon: <FaHandHoldingUsd size={48} />, title: "Честные выплаты", description: "Без задержек и скрытых комиссий." },
  { id: 3, icon: <FaHeadset size={48} />, title: "Круглосуточная поддержка", description: "Помощь в любой ситуации." },
  { id: 4, icon: <FaFileAlt size={48} />, title: "Помощь с документами", description: "Консультации по ИП, самозанятости и ОСГОП." },
  { id: 5, icon: <FaCar size={48} />, title: "Подбор автомобилей", description: "Подберём машину под нужный тариф." },
  { id: 6, icon: <FaUserCheck size={48} />, title: "Подбор водителей", description: "Найдём надёжного водителя для вашего авто." },
];

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.03,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.8
      }
    }
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "15px",
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'}`} />
    ),
    appendDots: dots => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px"
        }
      }
    ]
  };

  return (
    <section id="about" className="snap-start min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100" ref={ref}>
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 md:py-12">
        <div>
          {/* Заголовок */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-6 md:mb-8 text-center pt-12 md:pt-6"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-gray-900 mb-4 md:mb-6"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}
            >
              О нас
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <motion.p 
                className="text-base md:text-lg text-gray-700 leading-tight"
              >
                <span className="text-lg md:text-xl text-yellow-500 font-semibold">Центр подключения водителей</span> – таксопарк, созданный водителями для водителей в г. Санкт-Петербург.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Мобильная карусель */}
          <div className="md:hidden mt-2 mb-8 px-2">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-semibold text-gray-900 mb-4 text-center"
              >
                Почему именно мы?
              </motion.h3>
              
              <motion.div variants={itemVariants} className="pb-2">
                <Slider {...sliderSettings}>
                  {services.map((service) => (
                    <div key={service.id} className="px-1 outline-none">
                      <motion.div
                        className="bg-white p-4 rounded-xl shadow-md h-[200px] w-full flex flex-col justify-center items-center border border-black border-opacity-10"
                        variants={itemVariants}
                      >
                        <motion.div 
                          className="bg-gradient-to-br from-yellow-100 to-yellow-50 w-12 h-12 p-2 rounded-full mb-3 flex items-center justify-center border border-black border-opacity-10"
                          variants={iconVariants}
                        >
                          {React.cloneElement(service.icon, { className: "text-yellow-600" })}
                        </motion.div>
                        <h3 className="text-base font-semibold text-center mb-2 text-gray-800 line-clamp-2">{service.title}</h3>
                        <p className="text-gray-600 text-center text-xs line-clamp-3 px-2">{service.description}</p>
                      </motion.div>
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </motion.div>
          </div>

          {/* Десктоп версия */}
          <div className="hidden md:block">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-2xl font-semibold text-gray-900 mb-8 text-center relative"
            >
              Почему именно мы?
              <motion.span 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              />
            </motion.h3>
            
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.0
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all border border-black border-opacity-10 hover:border-yellow-200 relative overflow-hidden"
                >
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-yellow-100 opacity-20 rounded-full border border-black border-opacity-10"></div>
                  <motion.div 
                    className="bg-gradient-to-br from-yellow-100 to-yellow-50 w-14 h-14 p-3 rounded-full mb-3 mx-auto flex items-center justify-center shadow-inner border border-black border-opacity-10"
                    variants={iconVariants}
                  >
                    {React.cloneElement(service.icon, { className: "text-yellow-600" })}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-center text-sm mb-3">{service.description}</p>
                  <motion.div 
                    className="w-8 h-1 bg-yellow-400 rounded-full mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1.2 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA блок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, type: "spring" }}
          className="text-center mt-4 mb-4 md:mb-0"
        >
          <motion.p 
            className="text-lg md:text-xl font-bold text-yellow-600 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 shadow-sm border border-black border-opacity-10"
          >
            Присоединяйтесь прямо сейчас!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;