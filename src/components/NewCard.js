import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NewCard({ art }) {
    
    const { pathname } = useLocation();

    return (
        <div className="article">
            <img className="article__image" src={art.image} alt="изображение карточки" />
            <a className="article__info" href={art.link} rel="noreferrer" target='_blank'>
            <p className="article__date">{art.date}</p>
            <p className="article__title">{art.title}</p>
            <p className="article__text">{art.text}</p>
            <p className="article__source">{art.source}</p>
            </a>
            <span className={"article__keyword " + (pathname==="/saved-news" && "article__keyword_visible")}>{art.keyword}</span>
            {pathname==="/saved-news" ?            
              <button className="article__delete"></button>
             : <button className="article__save"></button>          
            
            }                      
        </div>
    )
}