import React from "react";
import { Link, useLocation } from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';


export default function Navigation({ isOpen, quit, isLogin }) {
  
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
   

  return (
    <nav className="navigation">
      <Link className={"navigation__main " + (pathname==="/saved-news" && "navigation__main_black")} to="/">
        Главная
      </Link>
      { isLogin && <Link className={"navigation__saved-news " + (pathname==='/saved-news' && "navigation__saved-news_black")} to="/saved-news" >Сохраненные статьи</Link>}
      { isLogin ?
      <div className={"navigation__container " + (pathname==="/" && "navigation__container_white")}>
      <p className={"navigation__profile " + (pathname==="/" && "navigation__profile_white")} >{currentUser}</p>
      <Link className={"navigation__logout " + (pathname==="/" && "navigation__logout_white")} to="/" onClick={quit}></Link>
      </div>      
      :
      <Link to='/' className="navigation__auth" onClick={isOpen}>
      Авторизоваться
      </Link>
       }
    </nav>
  );
}
