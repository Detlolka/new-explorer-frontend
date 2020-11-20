import React from "react";
import Header from "./Header";
import SearchFrom from "./SearchForm";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <div className="background">
        <Header />
        <SearchFrom />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
