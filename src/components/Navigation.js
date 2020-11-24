import React from "react";
import {  Link, useLocation } from 'react-router-dom';


export default function Navigation({ isOpenPopupAuth }) {

  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <Link className={"navigation__main " + (pathname==="/saved-news" && "navigation__main_black")} to="/">
        Главная
      </Link>
      <Link className={"navigation__saved-news " + (pathname==='/saved-news' && "navigation__saved-news_black")} to="/saved-news">Сохраненные статьи</Link>
      { pathname==="/saved-news" ?
      <div className="navigation__container">
      <p className="navigation__profile">Грета</p>
      <Link className="navigation__logout" to="/"></Link>
      </div>      
      :
      <Link to='/' className="navigation__auth">
      <button className="navigation__authorize-button" onClick={isOpenPopupAuth}>Авторизоваться</button>
      </Link>
       }
    </nav>
  );
}
