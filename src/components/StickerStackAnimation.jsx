import React, { useState, useEffect } from "react";
import lentaPosts from "../assets/lentaPosts"; // Массив объектов с полями image и text

const DISPLAY_COUNT = 4; // Количество карточек, одновременно видимых в стопке
const ANIMATION_DURATION = 800; // Длительность анимации (в мс)
const INTERVAL = 2500; // Интервал между циклами анимации

export const StickerStackAnimation = () => {
  const [items, setItems] = useState(lentaPosts);
  const [isAnimating, setIsAnimating] = useState(false);

  // Каждые INTERVAL мс запускаем анимацию верхней карточки
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // По завершении анимации (только у верхней карточки)
  const handleAnimationEnd = () => {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setIsAnimating(false);
  };

  const visibleItems = items.slice(0, DISPLAY_COUNT);
  return (
    <div className="sticker-stack-animation">
      {visibleItems.map((item, index) => {
        const isTopCard = index === 0;
        return (
          <div
            key={item.image + index}
            className={`sticker-card ${
              isTopCard && isAnimating ? "animate" : ""
            }`}
            style={{ zIndex: DISPLAY_COUNT - index }}
            // Только у верхней карточки ловим окончание анимации
            onAnimationEnd={isTopCard ? handleAnimationEnd : undefined}
          >
            <img src={item.image} alt={item.text} />
          </div>
        );
      })}
    </div>
  );
};
