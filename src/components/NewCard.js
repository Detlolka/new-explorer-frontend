import React from "react";
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import 'moment/locale/ru';
const moment = require('moment');

export default function NewCard({ art, isLogin , deleteNew, savedArticles, changeArticles, openAuth }) {
  

  const { pathname } = useLocation();
  const date = moment(art.date).format('LL');
  const source = art.source;
  const [flag, setFlag] = useState(false);
 
  useEffect(() => {
       if (isLogin) {
         setFlag(savedArticles.find((a) => a.link === art.link) !== undefined) 
       } 
  }, [isLogin, savedArticles, art.link, flag])
  
  function clickButton() {
    if(isLogin) {
    changeArticles(art);
    } else {
      openAuth()
    }
  }

  return (
    <div className="article">
      <img
        className="article__image"
        src={
          art.image
            ? art.image
            : "https://cdn.akson.ru/i/1819/1819738/1000.jpg"
        }
        alt="изображение карточки"
        onError={(e) => {
          e.target.src =
            "https://cdn.akson.ru/i/1819/1819738/1000.jpg";
        }}
      />
      <a
        className="article__info"
        href={art.link}
        rel="noreferrer"
        target="_blank"
      >
        <p className="article__date">{date}</p>
        <p className="article__title">{art.title ? art.title : 'Заголовок отсутствует'}</p>
        <p className="article__text">{art.text ? art.text : 'Текст отсутсвует'}</p>
        <p className="article__source">{source}</p>
      </a>
      <span
        className={
          "article__keyword " +
          (pathname === "/saved-news" && "article__keyword_visible")
        }
      >
        {art.keyword}
      </span>
      {pathname === "/saved-news" ? (
        <button className="article__delete" onClick={() => deleteNew(art._id)}></button>
      ) : (
        <button className={"article__save " + (flag && "article__save_active ") } onClick={clickButton} ></button>
      )}
    </div>
  );
}
