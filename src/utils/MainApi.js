import { MY_URL } from "./constants";

export function register(email, password, name) {
  return fetch(`${MY_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((error) => console.error(error));
}

export function authorization(email, password) {
  return fetch(`${MY_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {      
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("jwt", data.token);      
      return data;
    })
    .catch((error) => console.error(error));
}

export function getContents(jwt) {  
  return fetch(`${MY_URL}/users/me`, {
    method: 'GET',
    headers: {        
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => {                               
      return res.json();
    })
    .then((data) =>  data)
    .catch((error) => {
      console.error(error);
    });
};
