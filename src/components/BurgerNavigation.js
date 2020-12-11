import React from 'react';
import { Link } from 'react-router-dom'
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function BurgerNavigation({ changeButton, isOpen, quit, isLogin }) {    
        
    const currentUser = React.useContext(CurrentUserContext)       

    return (
        <nav className="burger-navigaton">
            <Link to="/" className="burger-navigation__link" onClick={changeButton}>Главная</Link>
    {isLogin &&   <Link to="/saved-news" className="burger-navigation__link" onClick={changeButton}>Сохранённые статьи</Link> }
        { isLogin ?
            <div className="burger-navigation__container">
                <p className="burger-navigation__profile">{currentUser}</p>
                <Link to="/" className="burger-navigation__logout" onClick={quit} />
            </div>
        :
            <Link to="/" className="burger-navigation__auth" onClick={isOpen}>
                Авторизоваться
            </Link>
        }            
        </nav>
    )
}