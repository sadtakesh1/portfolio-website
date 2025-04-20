import firstImage from "../assets/images/yo/1.png";
import secondImage from "../assets/images/yo/2.png";
import thirdImage from "../assets/images/yo/3.png";
import fourthImage from "../assets/images/yo/4.png";
import fifthImage from "../assets/images/yo/5.png";
import sixthImage from "../assets/images/yo/6.png";
import seventhImage from "../assets/images/yo/7.png";
import eighthImage from "../assets/images/yo/8.png";
import ninthImage from "../assets/images/yo/9.png";
import tenthImage from "../assets/images/yo/10.gif";
import eleventhImage from "../assets/images/yo/11.gif";

function Yo() {
  return (
    <div className="project-info-yo">
      <div className="project-info-yo__container">
        <div className="project-info-yo__block">
          <h2 className="project-info-yo__title">ЙО!</h2>
          <p className="project-info-yo__tags">Упаковка, иллюстрация</p>
        </div>
        <div className="project-info-yo__objectives">
          <div className="project-info-yo__task">
            <p className="project-info-yo__task-title">Задача:</p>
            <p className="project-info-yo__task-text">
              Создание логотипа, нейминг и дизайн упаковки для питьевого
              йогурта, кириллизация шрифта «Raisonne».
            </p>
          </div>
          <div className="project-info-yo__solution">
            <p className="project-info-yo__solution-title">Решение:</p>
            <p className="project-info-yo__solution-text">
              Название "ЙО" обозначает сленговое<br />приветствие, которое также
              является аббревиатурой от "йогурт". Обнимающиеся фрукты и витамины
              — метафора соединения ингредиентов.
            </p>
          </div>
        </div>
      </div>
      <div className="project-info-yo__image-container">
        <img className="project-info-yo__image" src={firstImage} alt="1" />
        <img className="project-info-yo__image" src={secondImage} alt="2" />
        <img className="project-info-yo__image" src={thirdImage} alt="3" />
        <img className="project-info-yo__image" src={fourthImage} alt="4" />
        <img className="project-info-yo__image" src={fifthImage} alt="5" />
        <img className="project-info-yo__image" src={sixthImage} alt="6" />
        <img className="project-info-yo__image" src={seventhImage} alt="7" />
        <img className="project-info-yo__image" src={eighthImage} alt="8" />
        <img className="project-info-yo__image" src={ninthImage} alt="9" />
        <img className="project-info-yo__image" src={tenthImage} alt="10" />
        <img className="project-info-yo__image" src={eleventhImage} alt="11" />
      </div>
    </div>
  );
}

export default Yo;
