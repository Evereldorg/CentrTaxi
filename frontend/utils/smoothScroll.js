export const enableSmoothScroll = () => {
  let isScrolling = false;
  let scrollEndTimer = null;
  let lastScrollTime = 0;
  const scrollDelay = 1000; // 1 секунда между скроллами

  const handleScroll = (e) => {
    const now = Date.now();
    
    // Пропускаем событие если скролл был недавно
    if (now - lastScrollTime < scrollDelay) {
      e.preventDefault();
      return;
    }

    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const delta = Math.sign(e.deltaY);
    const scrollAmount = window.innerHeight * delta;

    isScrolling = true;
    lastScrollTime = now;
    
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });

    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  };

  window.addEventListener('wheel', handleScroll, { passive: false });
  
  return () => {
    window.removeEventListener('wheel', handleScroll);
    clearTimeout(scrollEndTimer);
  };
};