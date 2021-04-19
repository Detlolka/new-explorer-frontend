export const URL_NEWS = 'https://nomoreparties.co/news/v2/everything?';
export const API_KEY = '22e6178072ca4d89853370e20e4e9ad8';
export const MY_URL = 'http://www.api-ne.students.nomoreparties.xyz'

let date = new Date();

// Текущая дата
export const TO_DATE = date.toISOString().slice(0, 10);

// Дата недельной давности
date.setDate(date.getDate() - 7);
export const FROM_DATE = date.toISOString().slice(0, 10);

