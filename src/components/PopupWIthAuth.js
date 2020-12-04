import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function PopupWithAuth({
  isOpen,
  onClose,
  changePopup,
  showClose,
  validation,
  errorMessage,
  isValid,
  values
}) {
  return (
    <PopupWithForm
      name="auth"
      isOpen={isOpen}
      onClose={onClose}
      title="Вход"
      buttonName="Войти"
      toggleName="Зарегистрироваться"
      changePopup={changePopup}
      showClose={showClose}
      isValid={isValid}
      children={
        <div className="popup__inputs">
          <p className="popup__input-title">Email</p>
          <input
            className="popup__input popup__input_email-auth"
            type="text"
            placeholder="Введите почту"
            name="email"
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            onChange={(evt) => validation(evt)}
            value={values.email || ''}
            required
          />
          <span className="popup__error">{errorMessage.email || ''}</span>
          <p className="popup__input-title">Пароль</p>
          <input
            className="popup__input popup__input_password-auth"
            type="password"
            placeholder="Введите пароль"
            name="password"
            minLength="2"
            maxLength="30"
            onChange={(evt) => validation(evt)}
            value={values.password || ''}
            required
          />
          <span className="popup__error">{errorMessage.password || ''}</span>
        </div>
      }
    />
  );
}
