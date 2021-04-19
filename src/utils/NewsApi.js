import { URL_NEWS, API_KEY, TO_DATE, FROM_DATE } from './constants';

function response(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Что то пошло не так: ${res.status}`)  
}

export default function newsApi(keyword) {
    return fetch(`${URL_NEWS}q=${keyword}&apiKey=${API_KEY}&from=${FROM_DATE}&to=${TO_DATE}&sortBy=publishedAt&pageSize=100`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(response)
}

