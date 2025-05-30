import { BrowserRouter as Router, useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import AppRoutes from "../routes/AppRoutes";
import AltNavBar from "../components/AltNavBar";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Main() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  const isProjectDetailPage = location.pathname.startsWith("/projects/");
  const isTestPage = location.pathname.startsWith("/test");

  const lentaProjectPage = location.pathname.startsWith("/projects/Lenta");
  const blueGifProjectPage = location.pathname.startsWith(
    "/projects/Lenta"
  );

  const showAltNav = isProjectDetailPage || isTestPage;

  const showAltContent = isProjectDetailPage || isTestPage;

  return (
    <div className={`page ${lentaProjectPage ? "page--lenta" : ""}`}>
      <div className={`content ${showAltContent ? "content--alt" : ""}`}>
        {/* {showAltNav ? <AltNavBar /> : <NavBar />} */}
        {showAltNav ? <AltNavBar isBlueGif={blueGifProjectPage} /> : <NavBar />}

        <AppRoutes />
      </div>
    </div>
  );
}
export default Main;
