import React from "react";
import { register } from "../utils/MainApi";
import PopupWithForm from "./PopupWithForm";

export default function PopupWithRegister({
  isOpen,
  onClose,
  changePopup,
  showClose,
  validation,
  errorMessage,
  isValid,
  values,
  register
})

{

  function handleSubmit(evt) {
    evt.preventDefault();
    register(values.email, values.password, values.name)
}

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
      isValid={isValid}
      handleSubmit={handleSubmit}
      children={
        <div className="popup__inputs">
          <p className="popup__input-title">Email</p>
          <input
            className="popup__input popup__input_email-register"
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
            className="popup__input popup__input_password-register"
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
          <p className="popup__input-title">Имя</p>
          <input
            className="popup__input popup__input_name-register"
            type="text"
            placeholder="Введите своё имя"
            name="name"
            minLength="2"
            maxLength="30"
            pattern="[А-ЯЁа-яёA-Za-z-\s]*"
            onChange={(evt) => validation(evt)}
            value={values.name || ''}
            required
          />
          <span className="popup__error">{errorMessage.name || ''}</span>
        </div>
      }
    />
  );
}
