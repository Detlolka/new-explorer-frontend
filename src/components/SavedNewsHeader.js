import React from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function SavedNewsHeader() {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__title">Сохраненные статьи</p>
      <p className="saved-news-header__info">{currentUser}, у вас 5 сохраненных статей</p>
      <p className="saved-news-header__keywords">По ключевым словам: 
        <span className="saved-news-header__keywords-bold"> Природа, Тайга</span> и
        <span className="saved-news-header__keywords-bold"> 2-м другим</span>
      </p>
    </div>
  );
}
