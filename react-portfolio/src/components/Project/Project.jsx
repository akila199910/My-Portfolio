import React from 'react'
import Projects from "../../data/Project.json";
import { getImageUrl } from '../../utils';

function Project() {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {Projects.map((Project,id)=>{
                return(
                    <div key={id}>
                        <img src={getImageUrl(Project.imageSrc)} alt={`Image of ${Project.tttle}`} />
                        <h3>{Project.tttle}</h3>
                        <p>{Project.description}</p>
                        <ul>
                            {Project.skills.map((skill,id)=>{
                                <li key={id}>{skill}</li>;
                            })}
                        </ul>
                        <a href={Project.demo}>Demo</a>
                        <a href={Project.source}>Source</a>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Project
