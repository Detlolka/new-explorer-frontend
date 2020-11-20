import React from "react";

export default function Navigation() {
  return (
    <nav className="navigation">
      <p className="navigation__main" activeClassName="navitaion__main-active">
        Главная
      </p>
      <button className="navigation__authorize-button">Авторизоваться</button>
    </nav>
  );
}
