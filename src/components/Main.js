import React from 'react';
import NewsCardList from './NewsCardList'
import About from "./About";

export default function Main() {
    return (
        <div className='content'>
        <NewsCardList />
        <About />
        </div>
    )
}