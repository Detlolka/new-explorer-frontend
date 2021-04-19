import React from "react";

import CurrentUserContext from "../contexts/CurrentUserContext";

export default function SavedNewsHeader({ news = [] }) {
  const currentUser = React.useContext(CurrentUserContext);
  
  // получаем ключевые слова в массив
  const arrKeyword = news.map(i =>i.keyword);   
  
  // ключевые слова и их количество
  const counterKeyword = arrKeyword.reduce((word, i) => {
       if (!word[i]) {
         word[i] = 1;
       } else {
         word[i] += 1;
       }
       return word;
  }, {})
   
  // создаем массив объектов ключевых слов и их значений
  const purposeKeywords = Object.entries(counterKeyword).map((k) => ({
    keyword: k[0],
    count: k[1],
  }));
  
  //сортируем массив обхектов в порядке убывания
  const sortedKeyword = purposeKeywords.sort((a, b) => b.count - a.count);
  // создаем массив слов
  const changeArray = sortedKeyword.map((k) => k.keyword);  

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__title">Сохраненные статьи</p>
      <p className="saved-news-header__info">
        {currentUser}, у вас {news.length} сохраненных статей
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам:
        <span className="saved-news-header__keywords-bold">
        
         {changeArray.length < 1 ? null : ` ${changeArray[0]} ` + (changeArray.length >= 2 ? `${changeArray[1]} ` : '')}
        </span>
      {changeArray.length < 3 ? null : "и"}<span className="saved-news-header__keywords-bold"> {changeArray.length >= 3 ? (`${changeArray.length - 2} другим`) : null} </span>
      </p>
    </div>
  );
}
