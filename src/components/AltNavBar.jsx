import { Link } from "react-router-dom";

function AltNavBar() {
  return (
    <nav className="alt-nav">
      <div class="alt-nav__anim"></div>
      <ul className="alt-nav__list">
        <li className="alt-nav__list-button alt-nav__list-button-projects">
          <Link to="/">Работы</Link>
        </li>
        <li className="alt-nav__list-button alt-nav__list-button-about">
          <Link to="/about">Обо мне</Link>
        </li>
        <li className="alt-nav__list-button alt-nav__list-button-contacts">
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AltNavBar;
