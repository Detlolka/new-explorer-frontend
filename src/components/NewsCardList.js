import React from 'react';
import { useState, useEffect } from 'react'
import { news } from '../utils/testArray';
import NewCard from './NewCard';

export default function NewCardList() {

    // Отрисовка новостей
    const [articles, setArticles] = useState([]);

    // скрытие кнопки для отображения новостей
    const [activeButton, setActiveButton] = useState(false);   

    //Изначальная загрузка новостей
    useEffect(() => {
        setArticles(news.slice(0, 3));
    }, [news])
    // Добавить еще статьи
    function moreArticles() {
        setArticles(news.slice(0, articles.length + 3))
    }

    // Скрытие кнопки
    if (articles.lenght >= news.lenght) {
        setActiveButton(true);
    }


    return (
        <div className="cardList">
            <p className="cardList__result">Результаты поиска</p>
            <div className="cardList__container">
                {
                    articles.map((art, i) => {
                        return (
                            <NewCard art={art} key={i} />
                        )
                    })
                }

            </div>
            <button
                className={`cardList__view active ` + (activeButton && "cardList__view_show")}
                onClick={moreArticles}>
                Показать еще
                 </button>
        </div>
    )
}