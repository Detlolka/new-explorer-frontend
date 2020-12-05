import React from "react";

export default function PopupNotifiCation({ onClose, changeAuth, isOpen }) {
  return (
    <div className={"popup " + (isOpen && "popup_opened")}>
      <div className="popup__container">
          <p className="popup__notification-message">Пользователь успешно зарегистрирован!</p>
          <span className="popup__notification-change" onClick={changeAuth}>Войти</span>
        <button className="popup__close" onClick={onClose} />
      </div>
    </div>
  );
}
