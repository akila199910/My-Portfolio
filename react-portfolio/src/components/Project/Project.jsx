import React from 'react'
import style from "./Project.module.css";
import Projects from "../../data/Project.json";
import { ProjectCard } from './ProjectCard';

function Project() {
  return (
    <section className={style.container}>
        <h2 className={style.title}>Projects</h2>
        <div className={style.project}>
            {Projects.map((Project,id)=>{
                return(
                    <ProjectCard key={id} Project={Project}/>
                )
            })}
        </div>
    </section>
  )
}

export default Project
