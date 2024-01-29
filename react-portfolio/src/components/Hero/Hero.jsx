import React from 'react'
import style from "./Hero.module.css";
import { getImageUrl } from '../../utils'

function Hero() {
  return (
    <section className={style.container}>
    <div className={style.content}>
      <h1 className={style.title}>Hi, I'm Akila</h1>
      <p className={style.description}>
        I'm a full-stack developer using React and NodeJS. 
        Reach out if you'd like to learn more!
      </p>
      <a href="mailto:akilaumayangaw@gmail.com" className={style.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"
        className={style.heroImg} />
    <div className={style.topBlur}></div>
    <div className={style.bottomBlur}></div>
    </section>
  );
};

export default Hero
