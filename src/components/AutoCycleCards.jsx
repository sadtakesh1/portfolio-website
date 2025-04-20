import React, { useState } from "react";
import lentaStories from "../assets/lentaPosts";
// lentaStories – массив объектов вида:
// [{ image: 'path/to/image1.jpg', text: 'Описание 1' }, { image: 'path/to/image2.jpg', text: 'Описание 2' }, ...]

const CommentCards = () => {
  // Имитируем начальное состояние, как в jQuery:
  // если ни одна карточка не отмечена, то устанавливаем current = 0, а out = последний элемент
  const [current, setCurrent] = useState(0);
  const [out, setOut] = useState(lentaStories.length - 1);

  // Вычисляем индекс следующей карточки
  const next = (current + 1) % lentaStories.length;

  // Обработчик клика по карточке
  const handleCardClick = (index) => {
    if (index !== current) {
      // Помечаем старую current как out, а нажатую карточку — как новую current
      setOut(current);
      setCurrent(index);
    }
  };

  // После окончания анимации карточки с классом card--out сбрасываем out
  const handleAnimationEnd = (index) => {
    if (index === out) {
      setOut(null);
    }
  };

  return (
    <div className="cards-wrapper">
      <div className="cards cards--active">
        {lentaStories.map((item, index) => {
          // Начинаем с базового класса "card"
          let cardClasses = "card";

          // Если карточка является текущей, можно добавить класс "card--current" (не обязателен, но для понятности)
          if (index === current) {
            cardClasses += " card--current";
          } else if (index === next) {
            cardClasses += " card--next";
          } else if (index === out) {
            cardClasses += " card--out";
          }
          return (
            <div
              key={index}
              className={cardClasses}
              onClick={() => handleCardClick(index)}
              onAnimationEnd={() => handleAnimationEnd(index)}
            >
              <img className="card__image" src={item.image} alt={item.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentCards;
