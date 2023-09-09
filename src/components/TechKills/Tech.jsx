import React, { useState } from 'react'
import express from "../../Img/Tech/express.png"
import node from "../../Img/Tech/node.png"
import postgres from "../../Img/Tech/postgresql.png"
import react from "../../Img/Tech/react.jpg"
import redux from "../../Img/Tech/redux.png"
import sequelize from "../../Img/Tech/sequalize.png"
import js from "../../Img/Tech/javascript.png"
import css from "../../Img/Tech/css.png"
import csharp from "../../Img/Tech/csharp.png"
import html from "../../Img/Tech/html.png"
import style from "./Tech.module.css"
const Tech = () => {
    const [tech, setTech] = useState(true)
    const [language, setLanguage] = useState(false)
    
    const handleChange = () => {
        if(tech){
            setTech(false);
            setLanguage(true);
        } else{
            setTech(true)
            setLanguage(false)
        }
    }

    return (
        <div className={style.iconTech}>
            <div className={style.cont}>
                <h2 className={style.title} onClick={() => handleChange()}>Tech</h2>
                <h2 className={style.title} onClick={() => handleChange()}>Language</h2>
            </div>
            {tech && <div className={style.techs}>
                <img className={style.shadow} src={express} alt="Express" />
                <img src={node} alt="Node" />
                <img src={postgres} alt="Postgres" />
                <img src={react} alt="React" />
                <img src={redux} alt="Redux" />
                <img src={sequelize} alt="Sequelize" />
            </div>}
            {language && <div className={style.techs}>
                <img src={js} alt="Express" />
                <img src={css} alt="Node" />
                <img src={csharp} alt="Postgres" />
                <img src={html} alt="React" />
                </div>}
        </div>
    )
}

export default Tech