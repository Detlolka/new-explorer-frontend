import React from "react";
import { useState, useEffect } from "react";
import { newsSave } from "../utils/testArraySave";
import NewCard from "./NewCard";

export default function SavedNews() {
  // Отрисовка новостей
  const [articles, setArticles] = useState([newsSave]); 

  //Изначальная загрузка новостей
  useEffect(() => {
    setArticles(newsSave);
  }, [newsSave]);
  

  return (
    <div className="cardList">
      <div className="cardList__container">
        {articles.map((art, i) => {
          return <NewCard art={art} key={i} />;
        })}
      </div>      
    </div>
  );
}
