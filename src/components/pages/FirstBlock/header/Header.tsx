import { useState } from "react";
import logo from "./../../../assets/header/logo.png"
import styles from "./Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoBlock}>
        <img src={logo} />
        <p className={styles.img}>CatyCat</p>
      </div>
      <div className={`${styles.menu} ${nav ? styles.active : ''}`}>
        <div className={styles.img}>
          {nav && (
            <div className={styles.logoNav}>
            <img src={logo} alt="Логотип" />
            <p className={styles.img}>CatyCat</p>
          </div>
          )}
        </div>
        <a href="#Как это работает" onClick={handleLinkClick}>Как это работает</a>
        <a href="#3-й блок" onClick={handleLinkClick}>Почему доверяют нам</a>
        <a href="#Вопросы и ответы" onClick={handleLinkClick}>Вопросы и ответы</a>
        <a href="#Заполните форму" onClick={handleLinkClick}>Форма</a>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
};