import React from "react";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <h3
        className={
          "header__title " +
          (pathname === "/saved-news" && "header__title_black")
        }
      >
        NewsExplorer
      </h3>
      <Navigation />
    </header>
  );
}
