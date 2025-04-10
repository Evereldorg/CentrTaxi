import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
    aria-label="Next"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
    aria-label="Previous"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const mockNews = {
  items: [
    {
      id: 1,
      text: "Новая программа лояльности для водителей с бонусами за рейсы. Специальные условия для активных водителей с бонусами до 15% от суммы заказа.",
      date: Date.now() / 1000 - 86400,
      attachments: [{
        photo: { sizes: [{ url: "https://via.placeholder.com/1200x600?text=Акция+для+водителей" }] }
      }]
    },
    {
      id: 2,
      text: "Обновлённое мобильное приложение доступно для скачивания. Теперь с улучшенной навигацией и быстрым выводом средств.",
      date: Date.now() / 1000 - 172800,
      attachments: [{
        photo: { sizes: [{ url: "https://via.placeholder.com/1200x600?text=Новое+приложение" }] }
      }]
    },
    {
      id: 3,
      text: "Расширение зоны работы. Теперь доступны новые районы города и пригорода для заказов.",
      date: Date.now() / 1000 - 259200,
      attachments: [{
        photo: { sizes: [{ url: "https://via.placeholder.com/1200x600?text=Новые+районы" }] }
      }]
    },
    {
      id: 4,
      text: "Специальная акция для новых водителей - повышенные тарифы в первый месяц работы.",
      date: Date.now() / 1000 - 345600,
      attachments: [{
        photo: { sizes: [{ url: "https://via.placeholder.com/1200x600?text=Акция+для+новичков" }] }
      }]
    },
    {
      id: 5,
      text: "Обновление условий работы - теперь доступны новые способы выплат.",
      date: Date.now() / 1000 - 432000,
      attachments: [{
        photo: { sizes: [{ url: "https://via.placeholder.com/1200x600?text=Новые+выплаты" }] }
      }]
    }
  ]
};

const NewSection = () => {
  const [news, setNews] = useState(mockNews.items);
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const updateInterval = useRef(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/api/news");
      
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        console.error("Ошибка API:", data.error);
        setError("Официальные новости временно недоступны");
        return;
      }

      if (data.response?.items) {
        setNews(data.response.items);
        setError(null);
      }
    } catch (error) {
      console.error("Ошибка при запросе новостей:", error);
      setError("Не удалось обновить новости");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    updateInterval.current = setInterval(fetchNews, 900000);
    return () => {
      if (updateInterval.current) {
        clearInterval(updateInterval.current);
      }
    };
  }, []);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: Math.min(3, news.length),
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div className="pb-4 sm:pb-8">
        <ul className="m-0 p-0 flex justify-center"> 
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'}`} />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          appendDots: dots => (
            <div className="pb-4 sm:pb-8">
              <ul className="m-0 p-0 flex justify-center">
                {dots}
              </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'}`} />
          )
        },
      },
    ],
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-100 font-sans pt-14 pb-8 md:pt-24 md:pb-12">
      {/* Заголовок с минимальным отступом */}
      <motion.div
        className="w-full py-2 text-center bg-gray-900 text-white text-lg md:text-3xl font-bold fixed top-16 left-0 z-20 h-12 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Новости
      </motion.div>

      {/* Основной контент с минимальным отступом сверху */}
      <div className="w-full h-full flex items-center justify-center px-4 pt-16 pb-12 md:pt-32 md:pb-16">
        <div className="w-full max-w-screen-xl relative">
          {error && (
            <motion.div 
              className="text-center text-yellow-600 mb-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error} (показаны примеры)
            </motion.div>
          )}

          <div className="py-2">
            <Slider {...settings}>
              {news.map((item, index) => (
                <div key={item.id || index} className="px-2 h-full">
                  <motion.div
                    className="bg-white rounded-xl shadow-xl overflow-hidden p-4 flex flex-col h-[400px] md:h-[500px] mb-4 md:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item.attachments?.[0]?.photo?.sizes?.length > 0 && (
                      <div className="mb-2 flex-shrink-0 h-[180px] md:h-[280px]">
                        <img
                          src={item.attachments[0].photo.sizes[item.attachments[0].photo.sizes.length - 1].url}
                          alt="Новость"
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/1200x600?text=Фото+новости";
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="mt-1 text-xs text-gray-500">
                      {new Date(item.date * 1000).toLocaleDateString("ru-RU", {
                        day: 'numeric',
                        month: 'long'
                      })}
                    </div>
                    <div className="mt-2 text-base font-medium line-clamp-4 text-gray-800 flex-grow">
                      {item.text}
                    </div>
                    <button
                      className="mt-3 self-start px-4 py-2 text-sm font-medium rounded-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition-colors"
                      onClick={() => openModal(index)}
                    >
                      Подробнее
                    </button>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {activeModal !== null && news[activeModal] && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 pt-16 pb-8 md:pt-24 md:pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-white max-w-2xl w-full rounded-xl p-6 relative max-h-[80vh] flex flex-col"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl font-bold bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="overflow-y-auto pr-2">
              {news[activeModal].attachments?.[0]?.photo?.sizes?.length > 0 && (
                <div className="mb-4 h-[200px] md:h-[350px]">
                  <img
                    src={news[activeModal].attachments[0].photo.sizes[news[activeModal].attachments[0].photo.sizes.length - 1].url}
                    alt="Новость"
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="text-sm text-gray-500 mb-2">
                {new Date(news[activeModal].date * 1000).toLocaleDateString("ru-RU", {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="text-base text-gray-800 whitespace-pre-wrap">
                {news[activeModal].text}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default NewSection;