import React from 'react';

export default function NewCard({ art }) {    
    return (
        <div className="article">
            <img className="article__image" src={art.image} alt="изображение карточки" />
            <a className="article__info" href={art.link} rel="noreferrer" target='_blank'>
            <p className="article__date">{art.date}</p>
            <p className="article__title">{art.title}</p>
            <p className="article__text">{art.text}</p>
            <p className="article__source">{art.source}</p>
            </a>
        </div>
    )
}