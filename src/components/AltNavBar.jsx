// import { Link } from "react-router-dom";

// function AltNavBar({ isBlueGif }) {
//   return (
//     <nav className={`alt-nav ${isBlueGif ? "alt-nav--blue" : ""}`}>
//       <div class="alt-nav__anim"></div>
//       <ul className="alt-nav__list">
//         <li className="alt-nav__list-button alt-nav__list-button-projects">
//           <Link to="/">Работы</Link>
//         </li>
//         <li className="alt-nav__list-button alt-nav__list-button-about">
//           <Link to="/about">Обо мне</Link>
//         </li>
//         <li className="alt-nav__list-button alt-nav__list-button-contacts">
//           <Link to="/contact">Контакты</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default AltNavBar;
import { Link, useLocation } from "react-router-dom";

function AltNavBar({ isBlueGif }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={`alt-nav ${isBlueGif ? "alt-nav--blue" : ""}`}>
      <div className="alt-nav__anim"></div>
      <ul className="alt-nav__list">
        <li
          className={`alt-nav__list-button alt-nav__list-button-projects ${
            currentPath.startsWith("/projects") ? "active" : ""
          }`}
        >
          <Link to="/">Работы</Link>
        </li>
        <li
          className={`alt-nav__list-button alt-nav__list-button-about ${
            currentPath === "/about" ? "active" : ""
          }`}
        >
          <Link to="/about">Обо мне</Link>
        </li>
        <li
          className={`alt-nav__list-button alt-nav__list-button-contacts ${
            currentPath === "/contact" ? "active" : ""
          }`}
        >
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AltNavBar;
