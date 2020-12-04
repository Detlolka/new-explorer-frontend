import React from 'react';
import notLogo from '../images/icon/not-found.svg'

export default function NotResult() {
    return (
        <div className="not-result">
            <img className="not-result__image" src={notLogo} alt="Ничего не найдено" />
            <p className="not-result__title">Ничего не найдено</p>
            <p className="not-result__subtitle">К сожалению по вашему запросу ничего не найдено</p>
        </div>
    )
}