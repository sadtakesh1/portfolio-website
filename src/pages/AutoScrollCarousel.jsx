import React from "react";
import lentaStories from "../assets/lentaStories";

export const AutoScrollCarousel = () => {
  const duplicatedStories = [...lentaStories, ...lentaStories]; // дублируем, чтобы был бесшовный скролл

  return (
    <div className="auto-carousel">
      <div className="auto-carousel__track">
        {duplicatedStories.map((item, index) => (
          <div key={index} className="auto-carousel__slide">
            <img
              src={item.image}
              alt={item.text}
              className="auto-carousel__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
