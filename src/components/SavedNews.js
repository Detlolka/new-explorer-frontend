import React from "react";
import NewCard from "./NewCard";

export default function SavedNews({ news, deleteNew }) {  

  return (
    <div className="cardList">
      <div className="cardList__container">
        {news.map((art, i) => {
          return <NewCard art={art} key={i} deleteNew={deleteNew} />;
        })}
      </div>      
    </div>
  );
}
