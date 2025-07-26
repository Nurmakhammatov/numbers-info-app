import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page__container">
        <div className="about-page__header">
          <h1>О приложении Numbers Facts</h1>
          <p className="about-page__subtitle">
            Узнайте удивительные факты о числах
          </p>
        </div>

        <div className="about-page__content">
          <section className="about-section">
            <h2>Что это такое?</h2>
            <p>
              Numbers Facts - это веб-приложение, которое предоставляет
              интересные факты о числах, используя Numbers API. Вы можете узнать
              математические свойства чисел, исторические события, связанные с
              определенными датами, и много других увлекательных фактов.
            </p>
          </section>

          <section className="about-section">
            <h2>Возможности</h2>
            <ul className="about-features">
              <li>
                <strong>Математические факты</strong> - узнайте интересные
                математические свойства любого числа
              </li>
              <li>
                <strong>Исторические события</strong> - получите информацию о
                событиях, произошедших в определенный день года
              </li>
              <li>
                <strong>События года</strong> - изучите важные события
                определенного года в истории
              </li>
              <li>
                <strong>Общие факты</strong> - откройте для себя удивительные и
                забавные факты о числах
              </li>
              <li>
                <strong>Случайные числа</strong> - исследуйте факты о случайно
                выбранных числах
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Технологии</h2>
            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">React Router</span>
              <span className="tech-badge">Atomic Design</span>
              <span className="tech-badge">Material-UI Design</span>
              <span className="tech-badge">Numbers API</span>
              <span className="tech-badge">Vite</span>
            </div>
          </section>

          <section className="about-section">
            <h2>Как использовать?</h2>
            <ol className="usage-steps">
              <li>Выберите тип информации, которую хотите получить</li>
              <li>Введите число или выберите случайное</li>
              <li>Нажмите кнопку "Получить информацию"</li>
              <li>Наслаждайтесь интересными фактами!</li>
            </ol>
          </section>
        </div>

        <div className="about-page__actions">
          <Link to="/">
            <Button variant="primary">Начать исследование</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
