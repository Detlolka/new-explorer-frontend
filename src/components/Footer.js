import React from "react";
import github from "../images/icon/git.svg"
import facebook from "../images/icon/vk.svg";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </p>
      <div className="footer__container">
      <ul className="footer__navigation">
        <li className="footer__navigation-list">
          <a className="footer__navigation-link" href="/">
            Главная
          </a>
        </li>
        <li className="footer__navigation-list">
          <a
            className="footer__navigation-link"
            href="https://praktikum.yandex.ru/"
            rel="noreferrer"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
        </li>
      </ul>
      <ul className="footer__social">
        <li className="footer__social-list">
          <a
            className="footer__social-link"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
          >
            <img className="footer__social_icon" src={github} alt="гитхаб" />
          </a>
        </li>
        <li className="footer__social-list">
          <a
            className="footer__social-link"
            href="https://vk.com/detlol"
            rel="noreferrer"
            target="_blank"
          >
            <img className="footer__social_icon" src={facebook} alt="гитхаб" />
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
}
