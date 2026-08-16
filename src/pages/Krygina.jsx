import heroImage from "../assets/images/krygina/1.jpg";
import productRed1 from "../assets/images/krygina/2.jpg";
import shadeIvory from "../assets/images/krygina/3-1.jpg";
import shadeNude from "../assets/images/krygina/3-2.jpg";
import shadeSand from "../assets/images/krygina/3-3.jpg";
import beforeAfterImage from "../assets/images/krygina/5.jpg";
import productRed2 from "../assets/images/krygina/6.jpg";
import packagingUnfold from "../assets/images/krygina/7-1.jpg";
import packagingOpen from "../assets/images/krygina/7-2.jpg";
import kryginaGallery from "../assets/kryginaGallery";
import kryginaVideos from "../assets/kryginaVideos";
import VideoPlayer from "../components/VideoPlayer";

const shades = [
  {
    id: "01",
    name: "IVORY",
    description: "Фарфорово-бежевый",
    image: shadeIvory,
  },
  {
    id: "02",
    name: "NUDE",
    description: "Натурально-бежевый",
    image: shadeNude,
  },
  {
    id: "03",
    name: "SAND",
    description: "Песочно-бежевый",
    image: shadeSand,
  },
];

// kryginaVideos — массив из 2 элементов: [0] для первого видео-блока,
// [1] для второго. Порядок важен, id тут не используется для поиска.
const [videoOne, videoTwo] = kryginaVideos;

function Krygina() {
  return (
    <div className="project-info-krygina">
      <div className="project-info-krygina__container">
        <div className="project-info-krygina__block">
          <h2 className="project-info-krygina__title">KRYGINA COSMETICS</h2>
          <p className="project-info-krygina__tags">
            Упаковка, e-commerce, SMM, арт-дирекшн, предметная и модельная
            съемка
          </p>
        </div>
        <div className="project-info-krygina__objectives">
          <div className="project-info-krygina__task">
            <p className="project-info-krygina__task-title">Задача:</p>
            <p className="project-info-krygina__task-text">
              Запуск BB-крема и создание визуальной системы для продукта:
              упаковка, карточки товара, SMM-материалы и лайтбокс.
            </p>
          </div>
          <div className="project-info-krygina__solution">
            <p className="project-info-krygina__solution-title">Решение:</p>
            <p className="project-info-krygina__solution-text">
              Красный цвет стал главным визуальным якорем бренда. Упаковка
              задала направление продуктовому ребрендингу, а съемка и
              графические элементы собрали продукт в единую, узнаваемую систему
              для digital и offline-каналов.
            </p>
          </div>
        </div>
      </div>

      {/* Hero: только изображение */}
      <div className="project-info-krygina__hero">
        <img
          className="project-info-krygina__hero-image"
          src={heroImage}
          alt="Модель держит тюбик KRYGINA Allure BB Cream"
        />
      </div>

      {/* Сплит: видео макро-кожи + продукт на красном */}
      <div className="project-info-krygina__split">
        <div className="project-info-krygina__split-item">
          <VideoPlayer
            src={videoOne.src}
            poster={videoOne.poster}
            alt="Текстура BB-крема на коже, видео"
          />
        </div>
        <div className="project-info-krygina__split-item project-info-krygina__split-item--red">
          <img
            src={productRed1}
            alt="Тюбик KRYGINA Allure BB Cream на красном фоне"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Оттенки */}
      <div className="project-info-krygina__shades">
        {shades.map((shade) => (
          <div className="project-info-krygina__shade" key={shade.id}>
            <img
              className="project-info-krygina__shade-image"
              src={shade.image}
              alt={`Оттенок ${shade.name}`}
              loading="lazy"
              decoding="async"
            />
            <p className="project-info-krygina__shade-name">
              {shade.id} {shade.name}
            </p>
            <p className="project-info-krygina__shade-description">
              {shade.description}
            </p>
          </div>
        ))}
      </div>

      {/* Красная сетка SMM-карточек */}
      <div className="project-info-krygina__gallery">
        <div className="project-info-krygina__gallery-grid">
          {kryginaGallery.map((item) => (
            <img
              key={item.id}
              className="project-info-krygina__gallery-image"
              src={item.src}
              alt={`Креатив для соцсетей ${item.id}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>

      {/* До / после — единая фотография с подписями */}
      <div className="project-info-krygina__before-after">
        <img
          className="project-info-krygina__before-after-image"
          src={beforeAfterImage}
          alt="Кожа лица до и после нанесения BB-крема"
          loading="lazy"
          decoding="async"
        />
        <span className="project-info-krygina__before-after-badge project-info-krygina__before-after-badge--before">
          ДО
        </span>
        <span className="project-info-krygina__before-after-badge project-info-krygina__before-after-badge--after">
          ПОСЛЕ
        </span>
      </div>

      {/* Сплит: продукт на красном + видео лицо/продукт */}
      <div className="project-info-krygina__split">
        <div className="project-info-krygina__split-item project-info-krygina__split-item--red">
          <img
            src={productRed2}
            alt="Тюбик KRYGINA Allure BB Cream на красном фоне"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="project-info-krygina__split-item">
          <VideoPlayer
            src={videoTwo.src}
            poster={videoTwo.poster}
            alt="Нанесение BB-крема на кожу, видео"
          />
        </div>
      </div>

      {/* Упаковка */}
      <div className="project-info-krygina__packaging">
        <img
          className="project-info-krygina__packaging-image"
          src={packagingUnfold}
          alt="Развёртка упаковки KRYGINA Allure BB Cream"
          loading="lazy"
          decoding="async"
        />
        <img
          className="project-info-krygina__packaging-image"
          src={packagingOpen}
          alt="Открытая коробка KRYGINA с сообщением на внутренней стороне"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Финальный логотип */}
      <div className="project-info-krygina__outro">
        <p className="project-info-krygina__outro-logo">KRYGINA</p>
      </div>
    </div>
  );
}

export default Krygina;
