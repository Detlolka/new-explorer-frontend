import React from "react";
import { useState, useEffect } from 'react';
import Header from "./Header";
import SearchFrom from "./SearchForm";
import Main from './Main'
import Footer from "./Footer";



function App() {

// const [width, setWidth] = useState(false);

// window.addEventListener('resize', e => {
//   const width = e.target.innerWidth;  
//      if (width <= 800) {
//         setWidth(true);
//      } else {
//        setWidth(false)
//      }
// })

  return (
    <div className="page">
      <div className="background">                
         <Header /> 
         <SearchFrom />               
      </div>
      <Main />      
      <Footer />
    </div>
  );
}

export default App;
