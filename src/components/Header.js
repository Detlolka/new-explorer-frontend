import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <h3 className="header__title">NewsExplorer</h3>
      <Navigation />
    </header>
  );
}
