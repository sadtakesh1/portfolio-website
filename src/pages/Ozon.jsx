import YouTubePlayer from "../components/YouTubePlayer";
import firstImage from "../assets/images/ozon/1.png";
import secondImage from "../assets/images/ozon/2.png";
import thirdImage from "../assets/images/ozon/3.png";
function Ozon() {
  return (
    <div className="project-info-ozon">
      <div className="project-info-ozon__container">
        <div className="project-info-ozon__block">
          <h2 className="project-info-ozon__title">OZON</h2>
          <p className="project-info-ozon__tags">3D, иллюстрация, анимация</p>
        </div>
        <div className="project-info-ozon__objectives">
          <div className="project-info-ozon__task">
            <p className="project-info-ozon__task-title">Задача:</p>
            <p className="project-info-ozon__task-text">
              Нарисовать иллюстрацию для стены пункта выдачи заказов ozon в
              любой технике, используя фирменные цвета и элементы айдентики
              бренда.
            </p>
          </div>
          <div className="project-info-ozon__solution">
            <p className="project-info-ozon__solution-title">Решение:</p>
            <p className="project-info-ozon__solution-text">
              В иллюстрации отражен характер бренда: человечный, живой и
              открытый. Иллюстрация выполнена в 3D с использованием фирменного
              лого и хековыми синим и малиновым цветами.
            </p>
          </div>
        </div>
      </div>
      <img className="project-info-ozon__image" src={firstImage} alt="1" />
      <img className="project-info-ozon__image" src={secondImage} alt="2" />
      <img className="project-info-ozon__image-last" src={thirdImage} alt="3" />
      <YouTubePlayer
        className="project-info-ozon__video"
        videoUrl="https://youtu.be/Y49872BChSE?si=2dtBX3aHUEU5WVNR"
      />
    </div>
  );
}

export default Ozon;
