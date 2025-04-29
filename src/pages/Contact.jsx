function Contact() {
  return (
    <section className="contact">
      <div className="contact__line"></div>
      <div className="contact__container">
        <h1 className="contact__container-title">
          <span className="contact__container-title-highlight">Здесь</span>{" "}
          начинается наше{" "}
          <span className="contact__container-title-highlight">
            сотрудничество
          </span>
        </h1>
        <p className="contact__container-text">
          Напишите мне любым удобным для вас способом:
        </p>
      </div>
      <ul className="contact__list">
        <li className="contact__list-item">
          <span className="contact__list-dot"></span>
          <a className="contact__list-link" href="tel:+79015357686">
            телефон
          </a>
        </li>
        <li className="contact__list-item">
          <span className="contact__list-dot"></span>
          <a
            className="contact__list-link"
            href="https://t.me/mayorlina1"
            target="_blank"
            rel="noopener noreferrer"
          >
            telegram
          </a>
        </li>
        <li className="contact__list-item">
          <span className="contact__list-dot"></span>
          <a className="contact__list-link" href="mailto:nyashnykotek@gmail.com">
            email
          </a>
        </li>
        <li className="contact__list-item">
          <span className="contact__list-dot"></span>
          <a
            className="contact__list-link"
            href="https://wa.me/79015357686"
            target="_blank"
            rel="noopener noreferrer"
          >
            whatsapp
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
