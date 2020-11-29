import React from 'react';
import PopupWithForm from './PopupWithForm'

export default function PopupWithRegister({ isOpen, onClose, changePopup, showClose }) {
    return (
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="register"
        title="Регистрация"
        buttonName="Зарегистрироваться"
        toggleName="Войти"
        changePopup={changePopup}
        showClose={showClose}
        children={
            <div className="popup__inputs">
               <p className="popup__input-title">Email</p>
                <input className="popup__input popup__input_email-register" type="text" placeholder="Введите почту" name="profileEmail" required />
                <p className="popup__input-title">Пароль</p>
                <input className="popup__input popup__input_password-register" type="password" placeholder="Введите пароль" name="profilePassword" required />
                <p className="popup__input-title">Имя</p>
                <input className="popup__input popup__input_name-register" type="text" placeholder="Введите своё имя" name="profileName" required />
            </div>
        }
         />
    )
}