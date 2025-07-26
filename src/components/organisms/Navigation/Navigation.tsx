import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "🏠" },
    { path: "/about", label: "О приложении", icon: "ℹ️" },
  ];

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link to="/" className="navigation__logo">
          <span className="navigation__logo-icon">🔢</span>
          <span className="navigation__logo-text">Numbers Facts</span>
        </Link>

        <ul className="navigation__menu">
          {navItems.map((item) => (
            <li key={item.path} className="navigation__item">
              <Link
                to={item.path}
                className={`navigation__link ${
                  location.pathname === item.path
                    ? "navigation__link--active"
                    : ""
                }`}
              >
                <span className="navigation__link-icon">{item.icon}</span>
                <span className="navigation__link-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
