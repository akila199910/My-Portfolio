import React from 'react'
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
        <a className={style.title} href="/">Portfolio</a>
        <div className={style.menu}>
            <ul className={style.menuItems}>
                <li><a href="#about">About</a></li>
            
                <li><a href="#experience">Experience</a></li>
            
                <li><a href="#projects">Projects</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
