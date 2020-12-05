import React from "react";

export default function PopupWIthForm({ children, isOpen, name, onClose, title, buttonName, toggleName, changePopup, showClose, isValid, handleSubmit }) {
 

  return (
    <div className={`popup popup_${name} ` + (isOpen && 'popup_opened')}>
      <div className="popup__container">
        <form className="popup__form" onSubmit={(evt) =>handleSubmit(evt)} noValidate>
          <p className="popup__title">{title}</p>
          {children}
          <button className={"popup__submit " + (!isValid && "popup__submit_disabled")} type="submit">
            {buttonName}
          </button>
          <button className="popup__toggle" type="button">
            или&nbsp;<span className="popup__another" onClick={changePopup}>{toggleName}</span>
          </button>
        </form>
        <button className={"popup__close " + (showClose && "popup__close_show") } onClick={onClose} type="button" />
      </div>
    </div>
  );
}
