import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.querySelector('.root'); // Скроллим весь page

    if (root) {
      root.scrollTop = 0;
    }

    // И дополнительно window (на всякий случай)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
