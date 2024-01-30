import React from 'react'
import style from "./About.module.css";
import { getImageUrl } from '../../utils';

function About() {
  return (
    <section className={style.container}>

        <h2 className={style.title}>About</h2>

        <div className={style.contant}>

            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={style.aboutImage}/>

        <ul className={style.aboutItems}>

            <li className={style.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Curse Icon" />
                <div className={style.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>

            <li className={style.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                <div className={style.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing and optimized back-end systems and APIs</p>
                </div>
            </li>
            
            <li className={style.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                <div className={style.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created design systems as well</p>
                </div>
            </li>
            
        </ul>
        </div>
    </section>
  )
}

export default About
