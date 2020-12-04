import React from "react";
import { useLocation } from "react-router-dom";
import 'moment/locale/ru';
const moment = require('moment');

export default function NewCard({ art, keyword }) {
  const { pathname } = useLocation();
  const date = moment(art.publishedAt).format('LL');  
  return (
    <div className="article">
      <img
        className="article__image"
        src={
          art.urlToImage
            ? art.urlToImage
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
        href={art.url}
        rel="noreferrer"
        target="_blank"
      >
        <p className="article__date">{date}</p>
        <p className="article__title">{art.title ? art.title : 'Заголовок отсутствует'}</p>
        <p className="article__text">{art.description ? art.description : 'Текст отсутсвует'}</p>
        <p className="article__source">{art.source.name}</p>
      </a>
      <span
        className={
          "article__keyword " +
          (pathname === "/saved-news" && "article__keyword_visible")
        }
      >
        {keyword}
      </span>
      {pathname === "/saved-news" ? (
        <button className="article__delete"></button>
      ) : (
        <button className="article__save"></button>
      )}
    </div>
  );
}
