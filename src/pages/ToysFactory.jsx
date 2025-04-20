import firstImage from "../assets/images/fdi/1.jpg";
import secondImage from "../assets/images/fdi/2.gif";
import thirdImage from "../assets/images/fdi/3.gif";
import fourthImage from "../assets/images/fdi/4.gif";
import fifthImage from "../assets/images/fdi/5.gif";
import sixthImage from "../assets/images/fdi/6.png";
import seventhImage from "../assets/images/fdi/7.jpg";
import eighthImage from "../assets/images/fdi/8.gif";
import ninthImage from "../assets/images/fdi/9.png";
import tenthImage from "../assets/images/fdi/10.png";
import eleventhImage from "../assets/images/fdi/11.png";

function ToysFactory() {
  return (
    <div className="project-info">
      <div class="project-info__container">
        <div className="project-info__block">
          <h2 class="project-info__title">ФАБРИКА ДЕРЕВЯННОЙ ИГРУШКИ</h2>
          <p class="project-info__tags">
            Брендинг, графика, упаковка,
            <br />
            предметный дизайн
          </p>
        </div>
        <div className="project-info__objectives">
          <div class="project-info__task">
            <p class="project-info__task-title">Задача:</p>
            <p class="project-info__task-text">
              Ребрендинг фабрики, создание мерча
              <br /> и сувенирных игрушек.
            </p>
          </div>
          <div class="project-info__solution">
            <p class="project-info__solution-title">Решение:</p>
            <p class="project-info__solution-text">
              Образы игрушек – фольклорные герои.
              <br /> В знак заложена первая ассоциация с<br /> деревянной
              игрушкой – детская деревянная
              <br /> лошадка. Тёплый, уютный фотостиль.
              <br /> Яркие, привлекающие внимания цвета.
            </p>
          </div>
        </div>
      </div>
      <img className="project-info__image" src={firstImage} alt="factory1" />

      <div className="project-info__description">
        <p className="project-info__description-text">
          <strong>Фабрика Деревянной Игрушки</strong> — российский производитель
          игрушек из дерева.
        </p>
        <p className="project-info__description-text">
          Фабрика начала свой путь в 2016 году, когда была создана столярная
          мастерская, творческим коллективом ремесленников. Вдохновившись
          работами народных мастеров прошлого, они использовали не только
          промышленные, но и «ручные» технологии. С самого начала было известно,
          что именно хотят выпускать — деревянные игрушки.
        </p>
        <p className="project-info__description-text">
          Сегодня фабрика планирует проводить мастер-классы и экскурсии по
          территории. Поэтому, встала задача о создании собственного бренда.
        </p>
      </div>

      <img className="project-info__image" src={secondImage} alt="factory2" />
      <img className="project-info__image" src={thirdImage} alt="factory3" />

      <div className="project-info__description">
        <p className="project-info__description-text">
          Деревянные игрушки должны привлекать внимание.  Поэтому в проекте
          используются такие яркие цвета.
        </p>
      </div>
      <img className="project-info__image" src={fourthImage} alt="factory4" />
      <img className="project-info__image" src={fifthImage} alt="factory5" />
      <div className="project-info__description">
        <p className="project-info__description-text">
          Логотип отражает самую первую ассоциацию с деревянной игрушкой — это
          детская деревянная лошадка.
        </p>
      </div>
      <img className="project-info__image" src={sixthImage} alt="factory5" />
      <img className="project-info__image" src={seventhImage} alt="factory5" />
      <img className="project-info__image" src={eighthImage} alt="factory5" />
      <img className="project-info__image" src={ninthImage} alt="factory5" />
      <img className="project-info__image" src={tenthImage} alt="factory5" />
      <img className="project-info__image" src={eleventhImage} alt="factory5" />
    </div>
  );
}

export default ToysFactory;
