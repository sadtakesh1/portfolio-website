// import React, { useState, useEffect } from "react";

// import scrollUp from "../assets/images/scroll-up.gif";

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(window.scrollY > 300);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <>
//       {isVisible && (
//         <button
//           className="scroll-to-top"
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//         >
//           <img
//             className="scroll-to-top__icon"
//             src={scrollUp}
//             alt="Scroll to top"
//           />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTopButton;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import scrollUpDefault from "../assets/images/scroll-up.gif";
import scrollUpLenta from "../assets/images/scroll-up-lenta.gif";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // маппинг путей к импортированным переменным
  const gifMap = {
    '/': scrollUpDefault,
    '/projects/Lenta': scrollUpLenta,
    '/about': scrollUpDefault,
    '/contact': scrollUpDefault,
  };

  const gifSrc = gifMap[location.pathname] || scrollUpDefault;

  return (
    <>
      {isVisible && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <img 
            className="scroll-to-top__icon" 
            src={gifSrc} 
            alt="Scroll to top" 
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

