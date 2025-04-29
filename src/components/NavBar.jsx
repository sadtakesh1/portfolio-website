// import { Link } from "react-router-dom";
// function NavBar() {
//   return (
//     <nav className='nav'>
//       <ul className="nav__list">
//         <li className="nav__list-button nav__list-button-projects">
//           <Link to="/">Работы</Link>
//         </li>
//         <li className="nav__list-button nav__list-button-about">
//           <Link to="/about">Обо мне</Link>
//         </li>
//         <li className="nav__list-button nav__list-button-contacts">
//           <Link to="/contact">Контакты</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li
          className={`nav__list-button nav__list-button-projects ${
            isActive("/projects") ? "active" : ""
          }`}
        >
          <Link to="/">Работы</Link>
        </li>
        <li
          className={`nav__list-button nav__list-button-about ${
            isActive("/about") ? "active" : ""
          }`}
        >
          <Link to="/about">Обо мне</Link>
        </li>
        <li
          className={`nav__list-button nav__list-button-contacts ${
            isActive("/contact") ? "active" : ""
          }`}
        >
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;


