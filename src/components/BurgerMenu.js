import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import BurgerNavigation from './BurgerNavigation';

export default function BurgerMenu({ onClose, isOpen, quit, isLogin }) {

    // стейт кнопки
    const [button, setButton] = useState(false);    

    const { pathname } = useLocation();

    // изменения состояни кнопки
    function changeButton() {
        if (button) {
            setButton(false)
            onClose()
        } else {
            setButton(true);
        }       
    }

    return (
        <div className={"burger " + (button && "burger_black") }>
            <header className="burger__header"> 
            <p className={"burger__title " + (!button && pathname==="/saved-news" && "burger__title_black")}>NewsExplorer</p>
            { button ?
             <button className="burger__close" onClick={changeButton} />
            :<button className={"burger__view " + (pathname==="/saved-news" && "burger__view_black")} onClick={changeButton} />             
            }
            </header>
            {button && <BurgerNavigation changeButton={changeButton} isOpen={isOpen} quit={quit} isLogin={isLogin} />}          

        </div>
    )
}