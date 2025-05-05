import { Routes, Route, Navigate } from "react-router-dom";
import ProjectsGallery from "../pages/ProjectsGallery";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TestPage from "../pages/TestPage";
import ToysFactory from "../pages/ToysFactory";
import TonycoStore from "../pages/TonycoStore";
import Ozon from "../pages/Ozon";
import Yasno from "../pages/Yasno";
import Yo from "../pages/Yo";
import Lenta from "../pages/Lenta";
import Muithom from "../pages/Muithom"
import PravilnayaKosmetika from "../pages/PravilnayaKosmetika";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" />} />
      <Route path="/projects" element={<ProjectsGallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="projects/TestPage" element={<TestPage />} />
      <Route path="projects/ToysFactory" element={<ToysFactory />} />
      <Route path="projects/TonycoStore" element={<TonycoStore />} />
      <Route path="projects/Ozon" element={<Ozon />} />
      <Route path="projects/Yasno" element={<Yasno />} />
      <Route path="projects/Yo" element={<Yo />} />
      <Route path="projects/Lenta" element={<Lenta />} />
      <Route path="projects/Muithom" element={<Muithom />} />
      <Route path="projects/PravilnayaKosmetika" element={<PravilnayaKosmetika />} />
    </Routes>
  );
};

export default AppRoutes;
