import mainGif from "../assets/images/lenta/main-gif.gif";

import lentaVideos from "../assets/lentaVideos";
import { AutoScrollCarousel } from "./AutoScrollCarousel";
import AutoCycleCards from "../components/AutoCycleCards";
import circleImage from "../assets/images/lenta/circle.svg";
import groupCirclesImage from "../assets/images/lenta/group-of-circles.svg";
import petalsImage from "../assets/images/lenta/petals.svg";
import lentaStories from "../assets/lentaStories";
function Lenta() {
  return (
    <div className="project-info-lenta">
      <div className="project-info-lenta__container">
        <div className="project-info-lenta__block">
          <h2 className="project-info-lenta__title">ЛЕНТА</h2>
          <p className="project-info-lenta__tags">SMM, анимация</p>
        </div>
        <div className="project-info-lenta__objectives">
          <div className="project-info-lenta__task">
            <p className="project-info-lenta__task-text">
              Примеры 2D анимаций, постов и сториз для магазина Лента.
            </p>
          </div>
          <div className="project-info-lenta__solution">
            <p className="project-info-lenta__solution-text">
              Работа с фирменным стилем бренда и с айдентикой СТМ.
            </p>
          </div>
        </div>
      </div>
      <img className="project-info-lenta__image" src={mainGif} alt="1" />

      {/*Видео-блок */}
      <div className="project-info-lenta__video-grid">
        {lentaVideos.map((video) => (
          <div key={video.id} className="project-info-lenta__video-container">
            <video controls className="project-info-lenta__video-player">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/**Блок с каруселью */}
      <AutoScrollCarousel items={lentaStories} />
      <AutoCycleCards />
      <img
        className="project-info-lenta__image-absolute-first"
        src={circleImage}
        alt="1"
      />
      <img
        className="project-info-lenta__image-absolute-second"
        src={groupCirclesImage}
        alt="2"
      />
      <img
        className="project-info-lenta__image-absolute-third"
        src={petalsImage}
        alt="3"
      />
    </div>
  );
}

export default Lenta;
// import React, { useRef, useEffect, useState } from "react";
// import mainGif from "../assets/images/lenta/main-gif.gif";
// import lentaVideos from "../assets/lentaVideos";
// import lentaStories from "../assets/lentaStories"; // массив с image + text

// function Lenta() {
//   const containerRef = useRef(null);
//   const [center, setCenter] = useState(0);
//   const slideWidth = 250;

//   useEffect(() => {
//     const container = containerRef.current;

//     const onWheel = (e) => {
//       e.preventDefault();
//       container.scrollLeft += e.deltaY;
//     };

//     const handleScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const containerWidth = container.offsetWidth;
//       const middle = scrollLeft + containerWidth / 2;
//       const newCenter = Math.round(middle / (slideWidth + 20)); // 20 = gap
//       setCenter(newCenter);
//     };

//     container.addEventListener("wheel", onWheel, { passive: false });
//     container.addEventListener("scroll", handleScroll);

//     return () => {
//       container.removeEventListener("wheel", onWheel);
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, [slideWidth]);

//   return (
//     <div className="project-info-lenta">
//       <div className="project-info-lenta__container">
//         <div className="project-info-lenta__block">
//           <h2 className="project-info-lenta__title">ЛЕНТА</h2>
//           <p className="project-info-lenta__tags">SMM, анимация</p>
//         </div>
//         <div className="project-info-lenta__objectives">
//           <div className="project-info-lenta__task">
//             <p className="project-info-lenta__task-text">
//               Примеры 2D анимаций, постов и сториз для магазина Лента.
//             </p>
//           </div>
//           <div className="project-info-lenta__solution">
//             <p className="project-info-lenta__solution-text">
//               Работа с фирменным стилем бренда и с айдентикой СТМ.
//             </p>
//           </div>
//         </div>
//       </div>

//       <img className="project-info-lenta__image" src={mainGif} alt="1" />

//       {/* Видео-блок */}
//       <div className="project-info-lenta__video-grid">
//         {lentaVideos.map((video) => (
//           <div key={video.id} className="project-info-lenta__video-container">
//             <video controls className="project-info-lenta__video-player">
//               <source src={video.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         ))}
//       </div>

//       {/* Карусель */}
//       <div
//         className="project-info-lenta__carousel scroll-carousel"
//         ref={containerRef}
//       >
//         {lentaStories.map((item, index) => {
//           const diff = Math.abs(index - center);
//           const scale = diff === 0 ? 1 : diff === 1 ? 0.85 : 0.7;
//           const zIndex = 100 - diff;

//           return (
//             <div
//               key={index}
//               className="scroll-slide"
//               style={{
//                 transform: `scale(${scale})`,
//                 zIndex,
//                 minWidth: `${slideWidth}px`,
//                 maxWidth: `${slideWidth}px`,
//               }}
//             >
//               <img src={item.image} alt={item.text} className="slide-img" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Lenta;
