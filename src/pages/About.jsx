import AboutExperince from "../components/AboutExperince";
import PolinaImage from "../assets/images/polina.png";
function About() {
  return (
    <section className="about">
      <div className="about__line"></div>
      <div className="about__dot"></div>
      <div className="about__dot"></div>
      <div className="about__dot"></div>
      <div className="about__dot"></div>
      <div className="about__dot"></div>
      <div className="about__container">
        <h1 className="about__container-title">
          Полина Майорова — Графический дизайнер.
        </h1>
        <p className="about__container-text">
          <span className="about__highlight">Привет! Я специализируюсь на</span>{" "}
          брендинге,
          <br /> упаковке, иллюстрации, 3D и анимации.
        </p>
        <p className="about__container-text">
          <span className="about__highlight">В дизайне люблю</span> простоту
          форм <span className="about__highlight">и уделяю</span>
          <br /> <span className="about__highlight">особенное</span> внимание
          содержанию и смыслам.
        </p>
      </div>
      <div className="about__description">
        <AboutExperince />
        <div className="about__description-group">
          <img
            className="about__description-image"
            src={PolinaImage}
            alt="Полина Майорова"
          />
          <p className="about__description-text">24\Москва</p>
          <p className="about__description-text">гибрид\удаленка </p>
          <p className="about__description-text">8 901 535 76 86</p>
          <p className="about__description-text">mayorlina1@gmail.com</p>
          <p className="about__description-text">tg: @mayorlina1</p>
        </div>
      </div>

      <h3 className="about__skills">
        Illustrator, Photoshop, After Effects, Figma, Blender 3D, InDesign.
      </h3>

      <h3 className="about__education">
        <span className="about__education-highlight">
          Национальный Институт Дизайна.
        </span>
        <br /> Бакалавр. Визуальные коммуникации.
        <br />
        Графический дизайнер.
      </h3>
      <div className="about__contacts">
        <a
          className="about__contacts-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/mayorlina1"
        >
          СВЯЖИТЕСЬ СО МНОЙ
        </a>
      </div>

      {/* <h3 className="about__contacts">СВЯЖИТЕСЬ СО МНОЙ</h3> */}
    </section>
  );
}

export default About;
