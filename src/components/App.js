import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Header from "./Header";
import SearchFrom from "./SearchForm";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Main from "./Main";
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

  const { pathname } = useLocation();

  return (
    <Switch>
      <div className="page">
        <Route exact path="/">
          <div
            className={
              "background " + (pathname === "/saved-news" && "background_white")
            }
          >
            <Header />
            <SearchFrom />
          </div>
          <NewsCardList />
          <About />
        </Route>
        <Route path="/saved-news">
          <Header />
          <Main />
        </Route>
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
