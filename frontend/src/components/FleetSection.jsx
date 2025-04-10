import React, { useState, useEffect } from "react";
import { FaCarSide, FaMapMarkedAlt, FaHelicopter, FaShip, FaHandshake } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const cardData = [
  {
    title: "VIP-трансферы",
    icon: <FaCarSide />,
    price: "от 1000 рублей",
    backText: "Встретим в аэропорту, на вокзале или границе. Ваш водитель с табличкой поможет с багажом и доставит без задержек.",
  },
  {
    title: "Эксклюзивные экскурсии",
    icon: <FaShip />,
    price: "от 10 000 рублей",
    backText: "Роскошные прогулки на катерах по знаменитым водным артериям города, где каждый маршрут создан с учетом ваших пожеланий.",
  },
  {
    title: "Полёты на вертолёте",
    icon: <FaHelicopter />,
    price: "от 15 000 рублей",
    backText: "Уникальная возможность увидеть северную столицу с высоты птичьего полета. Захватывающие виды города, залива и достопримечательностей.",
  },
  {
    title: "Выездные мероприятия",
    icon: <FaMapMarkedAlt />,
    price: "от 30 000 рублей",
    backText: "Сделаем любое событие незабываемым, предоставляя элегантные автомобили, водителей в форме и безупречный сервис.",
  },
  {
    title: "Обслуживание ПЭМФ",
    icon: <FaHandshake />,
    price: "цена обсуждается",
    backText: "Мы активно работаем на этом знаковом мероприятии, обеспечивая транспортное сопровождение делегатов, участников и гостей.",
  },
];

const FleetSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 80
      }
    })
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="fleet" className="snap-start h-screen flex flex-col overflow-hidden" ref={ref}>
      {/* Верхняя часть с увеличенным отступом сверху */}
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="bg-white w-full px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-4 flex-shrink-0"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl pt-8 font-bold mb-4 text-gray-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Центр подключения водителей<br className="hidden md:block" /> 
            <span className="text-yellow-500">— комфорт и качество в каждой поездке</span>
          </motion.h2>

          {/* ПК текст */}
          <motion.div 
            variants={containerVariants}
            className="hidden md:block text-center w-full max-w-4xl"
          >
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 mb-2 leading-relaxed font-light">
              Мы предлагаем профессиональные услуги такси во всех тарифах: 
              <span className="font-medium"> Эконом</span>, 
              <span className="font-medium"> Комфорт</span>, 
              <span className="font-medium"> Комфорт+</span>, 
              <span className="font-medium"> Бизнес</span>, 
              <span className="font-medium"> Премьер</span>, 
              <span className="font-medium"> Элит</span>, 
              <span className="font-medium"> Минивэн</span>.
            </motion.p>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              Мы создаем премиальный сервис перевозок с удобными, статусными и незабываемыми поездками.
            </motion.p>
          </motion.div>

          {/* Мобильный текст */}
          <motion.div 
            variants={containerVariants}
            className="md:hidden max-w-xs mx-auto"
          >
            <motion.p variants={itemVariants} className="text-sm text-gray-600 mb-2 leading-snug">
              Услуги такси всех классов: 
              <span className="font-medium"> от Эконом до Элит</span>.
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm text-gray-600 leading-snug">
              <span className="font-medium">Премиальный комфорт</span> в каждой поездке.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Нижняя часть с карточками */}
      <div className="flex-1 w-full relative overflow-hidden">
        {/* ПК карточки */}
        <div className="hidden md:flex w-full h-full justify-center items-center pb-6 px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/fleet-desktop.jpg')" }}
          />
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-5 gap-8 px-6"
          >
            {cardData.map((card, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={cardVariants}
                className="w-full h-[26rem] perspective-1200 cursor-pointer"
                style={{ 
                  perspective: "1200px",
                  transformStyle: "preserve-3d"
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${hoveredCard === index ? 'rotate-y-180' : ''}`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: hoveredCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                    willChange: "transform"
                  }}
                >
                  {/* Постоянный фон с эффектом матового стекла (передняя сторона) */}
                  <div 
                    className="absolute w-full h-full bg-white/60 backdrop-blur-md rounded-3xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  />

                  {/* Передняя сторона контента */}
                  <div 
                    className="absolute w-full h-full border border-black/20 rounded-3xl flex flex-col items-center shadow-xl p-6 justify-center text-center ring-1 ring-black/10"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                      WebkitBackfaceVisibility: "hidden",
                      backgroundColor: 'transparent'
                    }}
                  >
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="font-bold text-xl mb-4 text-gray-800"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.4 + index * 0.1,
                        type: "spring",
                        stiffness: 150
                      }}
                    >
                      {React.cloneElement(card.icon, { className: "text-yellow-500 text-5xl mb-4" })}
                    </motion.div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-base font-semibold mt-2 bg-yellow-400/90 px-4 py-1.5 rounded-full text-gray-800 backdrop-blur-sm ring-1 ring-black/10"
                    >
                      {card.price}
                    </motion.p>
                  </div>

                  {/* Постоянный фон с эффектом матового стекла (задняя сторона) */}
                  <div 
                    className="absolute w-full h-full bg-gray-800/70 backdrop-blur-md rounded-3xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  />

                  {/* Задняя сторона контента */}
                  <div 
                    className="absolute w-full h-full border border-black/30 rounded-3xl flex flex-col items-center shadow-xl p-6 justify-center text-center ring-1 ring-black/20"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      WebkitBackfaceVisibility: "hidden",
                      backgroundColor: 'transparent'
                    }}
                  >
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-200 text-sm leading-relaxed px-2"
                    >
                      {card.backText}
                    </motion.p>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.4,
                        type: "spring"
                      }}
                      className="mt-4 bg-yellow-400/90 text-gray-800 px-4 py-1.5 rounded-full font-medium text-xs backdrop-blur-sm ring-1 ring-black/10"
                    >
                      Подробнее
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Мобильная карусель */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-full gap-4 px-4 pt-6 pb-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/fleet-mobile.jpg')" }}
          />
          
          <div className="relative z-10 flex w-full h-full items-center">
            {cardData.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                custom={idx}
                className="flex-none w-60 h-[16rem] rounded-2xl border border-black/20 shadow-lg snap-center p-3 mx-1.5 flex flex-col ring-1 ring-black/10 relative"
                style={{ 
                  marginTop: '16px', 
                  marginBottom: '16px'
                }}
              >
                <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-2xl" />
                <div className="flex-1 flex flex-col items-center justify-center text-center px-2 relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="font-bold text-sm mb-2 text-gray-800"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.4 + idx * 0.1,
                      type: "spring",
                      stiffness: 150
                    }}
                    className="my-1"
                  >
                    {React.cloneElement(card.icon, { className: "text-yellow-500 text-3xl" })}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-xs font-semibold mt-1 bg-yellow-400/90 px-2 py-1 rounded-full text-gray-800 backdrop-blur-sm ring-1 ring-black/10"
                  >
                    {card.price}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="text-[0.7rem] text-gray-600 mt-2 leading-relaxed"
                  >
                    {card.backText}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSection;