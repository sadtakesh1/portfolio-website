import firstImage from "../assets/images/yasno/1.png";
import secondImage from "../assets/images/yasno/2.png";
import thirdImage from "../assets/images/yasno/3.png";
import fourthImage from "../assets/images/yasno/4.png";
function Yasno() {
  return (
    <div className="project-info-yasno">
      <div className="project-info-yasno__container">
        <div className="project-info-yasno__block">
          <h2 className="project-info-yasno__title">ЯСНО</h2>
          <p className="project-info-yasno__tags">Иллюстрация</p>
        </div>
        <div className="project-info-yasno__objectives">
          <div className="project-info-yasno__task">
            <p className="project-info-yasno__task-title">Задача:</p>
            <p className="project-info-yasno__task-text">
              Создание иллюстрации для статьи:<br /> "Как нас меняет родительство?".
            </p>
          </div>
          <div className="project-info-yasno__solution">
            <p className="project-info-yasno__solution-title">Решение:</p>
            <p className="project-info-yasno__solution-text">
              Ограниченная палитра с фирменным голубым цветом. Иллюстрации
              построены<br />на метафоре второго порядка.
            </p>
          </div>
        </div>
      </div>
      <div className="project-info-yasno__image-container">
        <img className="project-info-yasno__image" src={firstImage} alt="1" />
        <img className="project-info-yasno__image" src={secondImage} alt="2" />
        <img className="project-info-yasno__image" src={thirdImage} alt="3" />
        <img className="project-info-yasno__image" src={fourthImage} alt="4" />
      </div>
    </div>
  );
}

export default Yasno;
