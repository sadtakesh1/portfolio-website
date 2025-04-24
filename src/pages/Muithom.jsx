import firstImage from "../assets/images/muithom/1.jpg";
import logo from "../assets/images/muithom/first-logo.svg";
import secondLogo from "../assets/images/muithom/second-logo.svg";
import secondImage from "../assets/images/muithom/2.jpg";
import thirdImage from "../assets/images/muithom/3.jpg";
import fourthImage from "../assets/images/muithom/4.jpg";
import fifthImage from "../assets/images/muithom/5.jpg";
import sixthImage from "../assets/images/muithom/6.jpg";
import seventhImage from "../assets/images/muithom/7.gif";
import eightImage from "../assets/images/muithom/8.gif";
import ninthImage from "../assets/images/muithom/9.jpg";
import AutoScrollCarousel from "./AutoScrollCarousel";
import muithomPosts from "../assets/muithomPosts";
import firstQr from "../assets/images/muithom/first-qr.jpg";
import secondQr from "../assets/images/muithom/second-qr.jpg";
import thirdQr from "../assets/images/muithom/third-qr.jpg";
function Muithom() {
  return (
    <div className="project-info-muithom">
      <div className="project-info-muithom__container">
        <div className="project-info-muithom__block">
          <h2 className="project-info-muithom__title">Muithom</h2>
          <p className="project-info-muithom__tags">
            Брендинг, графика, упаковка
          </p>
        </div>
        <div className="project-info-muithom__objectives">
          <div className="project-info-muithom__task">
            <p className="project-info-muithom__task-title">Задача:</p>
            <p className="project-info-muithom__task-text">
              Брендинг продуктов, направленных на удаление неприятных запахов.
            </p>
          </div>
          <div className="project-info-muithom__solution">
            <p className="project-info-muithom__solution-title">Решение:</p>
            <p className="project-info-muithom__solution-text">
              Иллюстрация — изображение основных парфюмированных нот аромата.
            </p>
          </div>
        </div>
      </div>
      <img className="project-info-muithom__image" src={firstImage} alt="1" />
      <div className="project-info-muithom__container-logo">
        <img className="project-info-muithom__logo" src={logo} alt="2" />
        <img
          className="project-info-muithom__logo-second"
          src={secondLogo}
          alt="3"
        />
      </div>
      <div className="project-info-muithom__case">
        <img
          className="project-info-muithom__case-image"
          src={secondImage}
          alt="2-1"
        />
        <div className="project-info-muithom__description-case">
          <p className="project-info-muithom__description-text">
            <strong>Muithom</strong> — бренд посвященный устранению неприятных
            запахов. В ассортименте бренда такие продукты как: туалетные и
            домашние спреи, а также дезодоранты для ног и тела.
          </p>
          <p className="project-info-muithom__description-text">
            Название компании с вьетнамского переводится буквально как "аромат".
            Фишка бренда — в использовании отдушек по мотивам популярных
            ароматов.
          </p>
          <p className="project-info-muithom__description-text-bold">
            ДЕЛАЕМ ЕСТЕСТВЕННОЕ
            <br />
            НЕБЕЗОБРАЗНЫМ
          </p>
        </div>
      </div>
      <img className="project-info-muithom__image" src={thirdImage} alt="3" />
      <div className="project-info-muithom__case">
        <div className="project-info-muithom__description-case">
          <p className="project-info-muithom__description-text">
            Бренд позиционирует свои продукты как решение интимных и
            табуированных проблем, так как он разрушает табу на обсуждение
            "деликатных" тем, что делает его доступным и близким.
          </p>
          <p className="project-info-muithom__description-text">
            <strong>Muithom</strong> направлен на людей, ищущих решения для
            комфорта в общественных местах, гостиницах, офисах, гостях и т.д.
          </p>

          <p className="project-info-muithom__description-text-bold">
            БОЛЬШЕ НЕ НАДО
            <br />
            СТЕСНЯТЬСЯ
          </p>
        </div>
        <img
          className="project-info-muithom__case-image"
          src={fourthImage}
          alt="4"
        />
      </div>
      <img className="project-info-muithom__image" src={fifthImage} alt="5" />

      <div className="project-info-muithom__case">
        <img
          className="project-info-muithom__case-image"
          src={sixthImage}
          alt="6"
        />
        <div className="project-info-muithom__description-case">
          <p className="project-info-muithom__description-text">
            Иллюстрации изображают основные парфюмированные ноты аромата.
          </p>
          <p className="project-info-muithom__description-text">
            К основным нотам добавляются элементы, идентифицирующие категорию
            продукта.
          </p>
          <p className="project-info-muithom__description-text">
            Плашка на лицевой стороне этикетки меняется, исходя из категорий
            продукта.
          </p>
          <p className="project-info-muithom__description-text-bold">
            НЕ ПРОСТО УСТРАНЕНИЕ
            <br />
            ЗАПАХОВ, А СОЗДАНИЕ
            <br />
            АТМОСФЕРЫ
          </p>
        </div>
      </div>
      <img className="project-info-muithom__image" src={seventhImage} alt="7" />
      <div className="project-info-muithom__case">
        <div className="project-info-muithom__description-case">
          <p className="project-info-muithom__description-text">
            Паттерн строится из повторяющегося элемента — цветочка — и разных
            знаменателей(уточка, попа в виде персика, трусы, какашки и т.д.).
          </p>
          <p className="project-info-muithom__description-text">
            Используется на фонах или креативах в незаметных местах. Не
            привлекает к себе внимания, но несет юмор.
          </p>

          <p className="project-info-muithom__description-text-bold">
            АРОМАТ, КОТОРЫЙ
            <br />
            РАССКАЖЕТ О ВАС
            <br />
            БОЛЬШЕ, ЧЕМ ВЫ САМИ
          </p>
        </div>
        <img
          className="project-info-muithom__case-image"
          src={eightImage}
          alt="8"
        />
      </div>
      <img className="project-info-muithom__image-last" src={ninthImage} alt="9" />
      <AutoScrollCarousel items={muithomPosts} />
      <div className="project-info-muithom__qr">
        <img className="project-info-muithom__qr-image" src={firstQr} alt="1" />
        <img className="project-info-muithom__qr-image" src={secondQr} alt="2" />
        <img className="project-info-muithom__qr-image" src={thirdQr} alt="3" />
      </div>
    </div>
  );
}

export default Muithom;
