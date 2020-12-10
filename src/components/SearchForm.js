import React from "react";
import { useState } from 'react';

export default function SearchForm({ searchNews }) {

  const [date, setDate] = useState('');   

  function handleSubmit(evt) {
    evt.preventDefault();    
    searchNews(date);
    const form = evt.target;
    form.reset();        
  }  

  return (
    <div className="search">
      <h1 className="search__title">Что твориться в мире?</h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете
      </p>
      <form className="search__container" method="GET" action="#" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Введите тему новости"
          name="search"
          defaultValue=""
          required
          onChange={(evt) => setDate(evt.target.value)}
        />
        <button className="search__button" type='submit'>Искать</button>
      </form>
    </div>
  );
}
