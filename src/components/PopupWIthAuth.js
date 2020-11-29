import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function PopupWithAuth({ isOpen, onClose, changePopup, showClose }) {

    return (
        <PopupWithForm
        name='auth'
        isOpen={isOpen}
        onClose={onClose}
        title="Вход"
        buttonName="Войти"
        toggleName="Зарегистрироваться"
        changePopup={changePopup}
        showClose={showClose}
        children={
            <div className="popup__inputs">
                <p className="popup__input-title">Email</p>
                <input className="popup__input popup__input_email-auth" type="text" placeholder="Введите почту" name="profileEmail" required/>
                <p className="popup__input-title">Пароль</p>
                <input className="popup__input popup__input_password-auth" type="password" placeholder="Введите пароль" name="profilePassword" required />
            </div>
        }
         />
    )
}