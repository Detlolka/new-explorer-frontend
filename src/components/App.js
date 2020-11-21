import React from "react";
import Header from "./Header";
import SearchFrom from "./SearchForm";
import Main from './Main'
import Footer from "./Footer";


function App() {
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
