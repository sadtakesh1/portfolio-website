// import React from "react";
// import lentaStories from "../assets/lentaStories";

// export const AutoScrollCarousel = () => {
//   const duplicatedStories = [...lentaStories, ...lentaStories]; // дублируем, чтобы был бесшовный скролл

//   return (
//     <div className="auto-carousel">
//       <div className="auto-carousel__track">
//         {duplicatedStories.map((item, index) => (
//           <div key={index} className="auto-carousel__slide">
//             <img
//               src={item.image}
//               alt={item.text}
//               className="auto-carousel__image"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import React from "react";

export const AutoScrollCarousel = ({ items }) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="auto-carousel">
      <div className="auto-carousel__track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="auto-carousel__slide">
            <img
              src={item.image}
              alt={item.text || `slide-${index}`}
              className="auto-carousel__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;