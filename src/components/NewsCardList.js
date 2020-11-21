import React from 'react';
import { news } from '../utils/testArray';
import NewCard from './NewCard';

export default function NewCardList() {
    return (
        <div className="cardList">
            <p className="cardList__result">Результаты поиска</p>
            <div className="cardList__container">
              {
                  news.map((art, i) => {
                      return (
                          <NewCard art={art} key={i} />
                      )
                  })
              }

            </div>
        </div>
    )
}