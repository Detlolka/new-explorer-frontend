import React from "react";

export default function SavedNewsHeader() {
  return (
    <div className="saved-news-header">
      <p className="saved-news-header__title">Сохраненные статьи</p>
      <p className="saved-news-header__info">Грета, у вас 5 сохраненных статей</p>
      <p className="saved-news-header__keywords">По ключевым словам: 
        <span className="saved-news-header__keywords-bold"> Природа, тайга</span> и
        <span className="saved-news-header__keywords-bold"> 2-м другим</span>
      </p>
    </div>
  );
}
