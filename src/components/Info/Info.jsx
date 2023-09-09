import React from 'react'
import styles from "./Info.module.css"
import Cerificado from "../../Img/Certificado.jpg"
import Mobile from "../../Img/Mobile.jpg"
import UnADM from "../../Img/UnADM.jpg"

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <div className={styles.spaceImage}>
                        <img src={Cerificado} alt={Cerificado} className={styles.image} />
                    </div>
                    <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                            <h3 className={styles.name}>Web Full Stack Developer</h3>
                            <p>Como estudiante en Henry, participé en un bootcamp de Web Full Stack developer que busca formar profesionales altamente capacitados en el desarrollo de aplicaciones web completas. Henry se destaca por su enfoque intensivo y práctico, permitiendo adquirir habilidades esenciales en un corto período. A través de proyectos colaborativos y reales, aprendí los fundamentos de la programación web y las tecnologías más demandadas en la industria. Con un equipo de instructores experimentados, Henry brinda orientación constante y un ambiente de aprendizaje colaborativo.</p>
                            <span className={styles.genreTag}>Duracion: 800 horas</span>
                            <a className={styles.gameDesc} href="https://www.soyhenry.com/">Ir</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <div className={styles.spaceImage}>
                        <img src={UnADM} alt={UnADM} className={styles.image} />
                    </div>
                    <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                            <h3 className={styles.name}>Ingenieria en Desarrollo de Software</h3>
                            <p>Mi formación me ha permitido comprender la planificación, diseño y evaluación de aplicaciones informáticas en diversos entornos y dispositivos. A través de un enfoque interdisciplinario, he desarrollado la capacidad de implementar nuevas tecnologías y mantener altos estándares de calidad. Mis conocimientos abarcan la programación en lenguajes como HTML, PHP y XML, y puedo crear códigos y manuales operativos, además de mantener sistemas. Aunque no he completado la carrera, he obtenido competencias para abordar proyectos emprendedores y sustentables, adaptados a tecnologías emergentes, y participar en investigación y docencia en el campo del software. Mi ética y responsabilidad social me guían en la aplicación de principios éticos y en la promoción de procesos sustentables en mi área de especialización.</p>
                            <span className={styles.genreTag}>Duracion: 4 Semestres</span>
                            <a className={styles.gameDesc} href="https://www.unadmexico.mx/ofertaeducativa/licenciaturas/division-de-ciencias-exactas-ingenieria-y-tecnologia/desarrollo-de-software">Ir</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <div className={styles.spaceImage}>
                        <img src={Mobile} alt={Mobile} className={styles.image} />
                    </div>
                    <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                            <h3 className={styles.name}>App Movile Developer</h3>
                            <p>Desarrollo de Apps Móviles de la mano de la "UCM" Universidad Complutense de Madrid.</p>
                            <span className={styles.genreTag}>Duracion: 40 horas</span>
                            <a className={styles.gameDesc} href="https://skillshop.exceedlms.com/student/collection/798207-apps?locale=es">Ir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info