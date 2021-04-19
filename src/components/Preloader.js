import React from 'react';

export default function Preloader() {
    return (
        <div className="preloader" >
            <i className="preloader__circle" />
            <p className="preloader__title">Идёт поиск новостей...</p>
        </div>
    )
}