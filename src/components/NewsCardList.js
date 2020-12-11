import React from "react";
import { useState, useEffect } from "react";
import NewCard from "./NewCard";


export default function NewCardList({ news, isLogin,  savedArticles, changeArticles, openAuth }) {  
  
  // Отрисовка новостей
  const [articles, setArticles] = useState([]);  

  // скрытие кнопки для отображения новостей
  const [activeButton, setActiveButton] = useState(false);

  //Изначальная загрузка новостей
  useEffect(() => {
    setArticles(news.slice(0, 3));
  }, [news]);

  // Добавить еще статьи и скрыть кнопку в случае исчерпания массива
  function moreArticles() {
    setArticles(news.slice(0, articles.length + 3));

    if (articles.length >= news.length) {
      setActiveButton(true);
    }
  }
  

  return (       
    <div className="cardList">
      <p className="cardList__result">Результаты поиска</p>
      <div className="cardList__container">
        {articles.map((art, i) => {
          return <NewCard art={art} key={i} isLogin={isLogin} savedArticles={savedArticles} changeArticles={changeArticles} openAuth={openAuth} />;
        })}
      </div>
      <button
        className={
          `cardList__view active ` + (activeButton && "cardList__view_show")
        }
        onClick={moreArticles}
      >
        Показать еще
      </button>
    </div>       
  );
}
