import React from "react";

export default function SearchForm() {
  return (
    <div className="search">
      <h1 className="search__title">Что твориться в мире?</h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете
      </p>
      <form className="search__container" method="GET" action="#">
        <input
          className="search__input"
          type="text"
          placeholder="Введите тему новости"
          name="search"
          defaultValue=""
          required
        />
        <button className="search__button">Искать</button>
      </form>
    </div>
  );
}
