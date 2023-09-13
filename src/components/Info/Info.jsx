import React from 'react'
import styles from "./Info.module.css"
import avatar from "../../Img/avata.png"
import JS from "../../Img/Tech/javascript.png"
import CSS from "../../Img/Tech/css.png"
import HTML from "../../Img/Tech/html.png"
import REACT from "../../Img/Tech/logo512.png"
import NODE from "../../Img/Tech/node.png"
import PGS from "../../Img/Tech/postgresql.png"
import REDUX from "../../Img/Tech/redux.png"
import SEQUA from "../../Img/Tech/sequalize.png"
import learning from "../../Img/Icons/learning.svg"
import ability from "../../Img/Icons/ability.svg"
import creative from "../../Img/Icons/creative.svg"

const Info = ({infoRef}) => {
    return (
        <div className={styles.info}>
            <div className={styles.sobre}>
                <div className={styles.contAvatar}>
                    <img className={styles.avatar} src={avatar} alt="avatar" />
                </div>
                <div className={styles.txt}>
                    <h2>Un poco sobre mi</h2>
                    <p >"Full Stack Developer especializado en Front-end y Back-end con experiencia en metodologías ágiles, GIT, estructura de datos, y tecnologías como React, Express y Sequelize. Habilidades sólidas en JavaScript, CSS, HTML y herramientas como GitHub y VS Code. Antecedentes en Business Development Support para trabajo en equipo y atención especializada. Apasionado por contribuir a soluciones innovadoras y abrazar nuevos desafíos."</p>
                    <h4 ref={infoRef}>Mis habilidades</h4>
                    <div className={styles.contTech}>
                        <img className={styles.tech} src={JS} alt="" />
                        <img className={styles.tech} src={CSS} alt="" />
                        <img className={styles.tech} src={HTML} alt="" />
                        <img className={styles.tech} src={REACT} alt="" />
                        <img className={styles.tech} src={NODE} alt="" />
                        <img className={styles.tech} src={PGS} alt="" />
                        <img className={styles.tech} src={REDUX} alt="" />
                        <img className={styles.tech} src={SEQUA} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.contQue}>
                <h3>¿Que me hace diferente?</h3>
                <div className={styles.contAfirm}>
                    <div className={styles.afirm}>
                        <img className={styles.focus} src={learning} alt="" />
                        <h4 className={styles.afirName}>Polivalencia y Aprendizaje Continuo</h4>
                        <p className={styles.afirmTxt}>Mi capacidad para trabajar tanto en el front-end como en el back-end me convierte en un activo versátil para cualquier equipo de desarrollo. Desde la interfaz de usuario hasta la gestión de bases de datos y la lógica del servidor.</p>
                    </div>
                    <div className={styles.afirm}>
                        <img className={styles.focus} src={ability} alt="" />
                        <h4 className={styles.afirName}>Enfoque Integral en el Desarrollo</h4>
                        <p className={styles.afirmTxt}>Esta capacidad me permite tener una visión completa de un proyecto, esto se traduce en la capacidad de ofrecer soluciones integrales que optimizan el rendimiento y la experiencia del usuario.</p>
                    </div>
                    <div className={styles.afirm}>
                        <img className={styles.focus} src={creative} alt="" />
                        <h4 className={styles.afirName}>Resolución Creativa de Problemas</h4>
                        <p className={styles.afirmTxt}> Mi experiencia en proyectos personales, demuestra mi capacidad para pensar creativamente y crear soluciones innovadoras. Siempre estoy dispuesto a explorar nuevas tecnologías y enfoques para resolver problemas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info