import React from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function BurgerNavigation({ changeButton, isOpen }) {
    
    const { pathname } = useLocation();

    return (
        <nav className="burger-navigaton">
            <Link to="/" className="burger-navigation__link" onClick={changeButton}>Главная</Link>
            <Link to="/saved-news" className="burger-navigation__link" onClick={changeButton}>Сохранённые статьи</Link>
        { pathname === "/saved-news" ?
            <div className="burger-navigation__container">
                <p className="burger-navigation__profile">Грета</p>
                <Link to="/" className="burger-navigation__logout" onClick={changeButton} />
            </div>
        :
            <Link to="/" className="burger-navigation__auth" onClick={isOpen}>
                Авторизоваться
            </Link>
        }            
        </nav>
    )
}