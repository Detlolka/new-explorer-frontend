import React from "react";
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Header";
import SearchFrom from "./SearchForm";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithRegister from "./PopupWIthRegister";
import PopupWithAuth from "./PopupWIthAuth";
import PopupNotification from "./PopupNotification";
import PopupNotifiCation from "./PopupNotification";

function App() {
  // const [width, setWidth] = useState(false);

  // window.addEventListener('resize', e => {
  //   const width = e.target.innerWidth;
  //      if (width <= 800) {
  //         setWidth(true);
  //      } else {
  //        setWidth(false)
  //      }
  // })

  // стейт попапа авторизации
  const [handleAuthPopup, setHandleAuthPopup] = useState(false);
  // стейт попапа регистрации
  const [handleRegisterPopup, setHandleRegisterPopup] = useState(false);
  //стейт попапа уведомления
  const [handleNotificationPopup, setHandleNotificationPopup] = useState(false);

  // функция открытия попапа авторизация
  function openPopupAuth() {
    setHandleAuthPopup(true);
  }

  // функция открытия попапа регистрации
  function openPopupRegister() {
    setHandleRegisterPopup(true);
  }

  // функция открытия попапа-уведомления
  function openPopupNotification() {
    setHandleNotificationPopup(true);
  }

  // функция преключение попапов
  function changePopup() {
    if (handleAuthPopup) {      
      openPopupRegister();  
      closeAllPopups();    
    }
    if (handleRegisterPopup) {      
      openPopupAuth();      
      closeAllPopups();
    }    
  }

  // функция закрытия всех попапов
  function closeAllPopups() {
    if (handleAuthPopup) {
    setHandleAuthPopup(false);
    }
    if (handleRegisterPopup) {
    setHandleRegisterPopup(false);
    }
    if (handleNotificationPopup) {
    setHandleNotificationPopup(false)
    }
  }

  // Закрытие попапов на Оверлей
  function closeOverlay(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }

  document.addEventListener("click", closeOverlay);

  // Закрытие попапов на Escape
  function closeEsc(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  document.addEventListener("keydown", closeEsc);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <div className="background">
            <Header isOpenPopupAuth={openPopupAuth} />
            <SearchFrom />
          </div>
          <NewsCardList />
          <About />
          <PopupWithAuth isOpen={handleAuthPopup} onClose={closeAllPopups} changePopup={changePopup} />
          <PopupWithRegister isOpen={handleRegisterPopup} onClose={closeAllPopups} changePopup={changePopup} />
          <PopupNotifiCation onClose={closeAllPopups} changeAuth={openPopupAuth} />
        </Route>
        <Route path="/saved-news">
          <Header />
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
