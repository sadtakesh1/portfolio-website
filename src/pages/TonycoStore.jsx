import firstImage from "../assets/images/tonyco/1.png";
import secondImage from "../assets/images/tonyco/2-1.png";
import absoluteSecondImage from "../assets/images/tonyco/2-2.png";
import thirdImage from "../assets/images/tonyco/3.png";
import fourthImage from "../assets/images/tonyco/4.png";
import fifthImage from "../assets/images/tonyco/5.png";
import sixthImage from "../assets/images/tonyco/6-1.png";
import absoluteSixthImage from "../assets/images/tonyco/6-2.png";
import seventhImage from "../assets/images/tonyco/7.png";

function TonycoStore() {
  return (
    <div className="project-info-tonyco">
      <div className="project-info-tonyco__container">
        <div className="project-info-tonyco__block">
          <h2 className="project-info-tonyco__title">toNyco store</h2>
          <p className="project-info-tonyco__tags">
            Брендинг, графика, упаковка
          </p>
        </div>
        <div className="project-info-tonyco__objectives">
          <div className="project-info-tonyco__task">
            <p className="project-info-tonyco__task-title">Задача:</p>
            <p className="project-info-tonyco__task-text">
              Брендинг для магазина уходовой косметики с выверенным составом.
            </p>
          </div>
          <div className="project-info-tonyco__solution">
            <p className="project-info-tonyco__solution-title">Решение:</p>
            <p className="project-info-tonyco__solution-text">
              Уходовая косметика дли лица, подобранная врачом-косметологом.
              Айдентика построена на кодировке текстур продуктов.
            </p>
            <p className="project-info-tonyco__solution-text">
              Минимализм и графические элементы-капли. Ничего лишнего.
            </p>
          </div>
        </div>
      </div>
      <img className="project-info-tonyco__image" src={firstImage} alt="1" />
      <div className="project-info-tonyco__case">
        <div className="project-info-tonyco__description-case">
          <p className="project-info-tonyco__description-text">
            <strong>TONYCO STORE</strong> — не просто магазин уходовой
            косметики,
            <br /> а уникальное пространство, где помогают открыть
            <br /> мир ухода за собой.
          </p>
          <p className="project-info-tonyco__description-text">
            Команда во главе с опытным врачом-косметологом
            <br /> Бойцовым Антоном Константиновичем тщательно
            <br /> отбирает и проверяет каждый продукт, чтобы предложить
            <br /> только самые эффективные и качественные средства.
          </p>
        </div>
        <img
          className="project-info-tonyco__case-image"
          src={secondImage}
          alt="2-1"
        />
        <img
          className="project-info-tonyco__case-image-absolute"
          src={absoluteSecondImage}
          alt="2-2"
        />
      </div>
      <img className="project-info-tonyco__image" src={thirdImage} alt="3" />
      <img
        className="project-info-tonyco__image-overlap"
        src={fourthImage}
        alt="4"
      />
      <img
        className="project-info-tonyco__image-textures"
        src={fifthImage}
        alt="5"
      />
      <div className="project-info-tonyco__case">
        <div className="project-info-tonyco__description-case-second">
          <p className="project-info-tonyco__description-text">
            В будущем команда планирует открыть физический магазин
            <br />
            <strong>TONYCO SPACE</strong> и совместить врачебную практику
            <br /> по дерматологии и косметологии с подбором работающей
            <br />
            уходовой косметики.
          </p>
        </div>
        <img
          className="project-info-tonyco__case-image"
          src={sixthImage}
          alt="6-1"
        />
        <img
          className="project-info-tonyco__case-image-absolute-second"
          src={absoluteSixthImage}
          alt="6-2"
        />
      </div>
      <img
        className="project-info-tonyco__image-overlap-second"
        src={seventhImage}
        alt="7"
      />
    </div>
  );
}

export default TonycoStore;
