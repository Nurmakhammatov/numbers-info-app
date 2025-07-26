import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <div className="not-found-page__content">
          <div className="not-found-page__number">404</div>
          <h1 className="not-found-page__title">Страница не найдена</h1>
          <p className="not-found-page__description">
            К сожалению, страница, которую вы ищете, не существует. Возможно,
            она была перемещена или удалена.
          </p>

          <div className="not-found-page__fact">
            <h3>Интересный факт о числе 404:</h3>
            <p>
              Код ошибки 404 получил свое название от номера комнаты в CERN, где
              располагался первый веб-сервер. Когда сервер не мог найти
              запрашиваемую страницу, он возвращал ошибку "404 Not Found".
            </p>
          </div>

          <div className="not-found-page__actions">
            <Link to="/">
              <Button variant="primary">На главную</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">О приложении</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
