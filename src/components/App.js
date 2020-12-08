import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import Header from "./Header";
import SearchFrom from "./SearchForm";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Main from "./Main";
import Footer from "./Footer";
import Preloader from "./Preloader";
import PopupWithRegister from "./PopupWIthRegister";
import PopupWithAuth from "./PopupWIthAuth";
import PopupNotifiCation from "./PopupNotification";
import NotResult from "./NotResult";
import BurgerMenu from "./BurgerMenu";
import NewsApi from "../utils/NewsApi";
import ProtectedRoute from "./ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { register, authorization, getContents } from "../utils/MainApi";

function App() {
  const history = useHistory();
  // стейт ширины дисплея
  const [width, setWidth] = useState(false);
  //слушатель ширины экрана
  const windowSize = useWindowWidth();
  // стейт попапа авторизации
  const [handleAuthPopup, setHandleAuthPopup] = useState(false);
  // стейт попапа регистрации
  const [handleRegisterPopup, setHandleRegisterPopup] = useState(false);
  //стейт попапа уведомления
  const [handleNotificationPopup, setHandleNotificationPopup] = useState(false);
  //стейт ключевого слова
  const [keyword, setKeyword] = useState("");
  //стейт массива поиска
  const [articles, setArticles] = useState([]);
  //cтейт компонента пустого массива
  const [handleNotResult, setHandleNotResult] = useState(false);
  //стейт состояния прелоадера
  const [handlePreloader, setHandlePreloader] = useState(false);
  //стейт состояния инпутов
  const [values, setValues] = useState({});
  //стейт состояния ошибок валидации
  const [error, setError] = useState({});
  //стейт состояния кнопки
  const [isValid, setIsValid] = useState(false);
  //стейт авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  //стейт данных пользователя
  const [currentUser, setCurrentUser] = useState("");  
  
  // Апи поиска новостей
  function searchNews(newsName) {
    setArticles([]);
    setHandleNotResult(false);
    setHandlePreloader(true);
    setTimeout(
      () =>
        NewsApi(newsName)
          .then((res) => {
            if (res.articles.length === 0) {
              setHandleNotResult(true);
            }
            setArticles(res.articles);
          })
          .catch((err) => {
            console.error(err);
            setHandleNotResult(true);
          })
          .finally(() => setHandlePreloader(false)),
      1300
    );
  }

  //проверка токена
  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getContents(jwt)
       .then((res) => {
         if(res) {
           setLoggedIn(true);
           setCurrentUser(res.name);
         } else {
           setLoggedIn(false);
           localStorage.removeItem("jwt");
         }
       })
       .catch((error) => console.error(error))      
    }
  }

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  //функция авторизации
  function handleLogin() {
    setLoggedIn(true);
  }

  //функция выхода
  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  }

  // Апи регистрации
  function registerUser(email, password, name) {
    register(email, password, name)
    .then((res) => {
      closeAllPopups();
      openPopupNotification();
    })
    .catch((error) => console.error(error));
  }

  // Апи авторизации
  function authUser(email, password) {
    authorization(email, password)
    .then((data) => {
      if (data.token) {
        handleLogin();
        closeAllPopups();
      }
    })
    .catch((error) => console.error(error));
  }

  //Функция валидации
  function handleValidation(evt) {
    const name = evt.target.name;
    const value = evt.target.value;        
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest("form").checkValidity());
  }

  //сброс данных форм
  function resetForms() {
    setValues({});
    setError({});
    setIsValid(false);
  }

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
    if (handleNotificationPopup) {
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
      setHandleNotificationPopup(false);
    }
    resetForms();
  }

  useEffect(() => {
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

    // функция замены компонента

    function changeHeader(size) {
      if (size <= 520) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    }
    changeHeader(windowSize);

    return () => {
      document.removeEventListener("click", closeOverlay);
      document.removeEventListener("keydown", closeEsc);
    };
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Switch>
        <Route exact path="/">
          <div className="background">
            {width ? (
              <BurgerMenu onClose={closeAllPopups} isOpen={openPopupAuth} quit={handleLogout} isLogin={loggedIn} />
            ) : (
              <Header isOpen={openPopupAuth} quit={handleLogout} isLogin={loggedIn} />
            )}
            <SearchFrom keyword={setKeyword} searchNews={searchNews} />
          </div>
          {handlePreloader ? <Preloader /> : null}
          {articles.length > 0 ? (
            <NewsCardList news={articles} keyword={keyword} />
          ) : null}
          {handleNotResult ? <NotResult /> : null}
          <About />
          <PopupWithAuth
            isOpen={handleAuthPopup}
            onClose={closeAllPopups}
            changePopup={changePopup}
            showClose={width}
            validation={handleValidation}
            errorMessage={error}
            isValid={isValid}
            values={values}
            auth={authUser}
          />
          <PopupWithRegister
            isOpen={handleRegisterPopup}
            onClose={closeAllPopups}
            changePopup={changePopup}
            showClose={width}
            validation={handleValidation}
            errorMessage={error}
            isValid={isValid}
            values={values}
            register={registerUser}
          />
          <PopupNotifiCation
            onClose={closeAllPopups}
            changeAuth={changePopup}
            isOpen={handleNotificationPopup}
          />
        </Route>
        <Route path="/saved-news">
          {width ? (
            <BurgerMenu onClose={closeAllPopups} isOpen={openPopupAuth} quit={handleLogout} isLogin={loggedIn} />
          ) : (
            <Header quit={handleLogout} isLogin={loggedIn} />
          )}
          <ProtectedRoute component={Main} loggedIn={loggedIn} />
        </Route>
      </Switch>
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
