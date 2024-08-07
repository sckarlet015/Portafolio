import React, { useState, useEffect } from 'react'
import style from "./Home.module.css"
import desarrollo from "../assets/desarrollo.jpg"
import disenio from "../assets/diseño.jpg"
import movil from "../assets/movil.jpg"
import tienda from "../assets/tienda.jpg"
import uxui from "../assets/uxui.jpg"
import marketing from "../assets/marketing.jpg"
import react from "../assets/react.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import nodejs from "../assets/nodejs.svg"
import javascript from "../assets/javascript.svg"
import express from "../assets/express.svg"
import postgresql from "../assets/postgresql.svg"
import vsc from "../assets/vsc.svg"
import insomnia from "../assets/insomnia.svg"
import git from "../assets/git.svg"
import github from "../assets/github.svg"
import figma from "../assets/figma.svg"
import googleAds from "../assets/googleAds.svg"
import BSDfondo from "../assets/BSDfondo.png"
import BSDlogo from "../assets/BSDLogo.png"
import testimonio from "../assets/foto.jpg"
import logo from "../assets/logoEric.png"
import carga from "../assets/gitCarga.gif"
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagramSquare, FaUserEdit, FaPlaceOfWorship } from 'react-icons/fa';
import { MdDeveloperMode, MdDesignServices, MdOutlineAndroid, MdLocalGroceryStore, MdMail, MdPhoneInTalk, MdOutlineCalendarMonth } from "react-icons/md";

const Home = () => {

    const [informacionBool, setInformacionBool] = useState(true)
    const [backgroundBool, setBackgroundBool] = useState(false)
    const [cursosBool, setCursosBool] = useState(false)

    const clckHome = () => {
        window.location.href = '/#inicio'
    }
    

    const handleChangeSeccion = (seccion) => {
        switch (seccion) {
            case "informacion":
                setInformacionBool(true)
                setBackgroundBool(false)
                setCursosBool(false)
                break;

            case "background":
                setInformacionBool(false)
                setBackgroundBool(true)
                setCursosBool(false)
                break;

            case "cursos":
                setInformacionBool(false)
                setBackgroundBool(false)
                setCursosBool(true)
                break;

            default:
                break;
        }
    }

    return (
        <div className={style.home}>
            <div className={style.hero} id='inicio'>
                <div className={style.prest}>
                    <h2 className={style.hello}>Hola, soy Eric Ramirez Desarrollador Web</h2>
                    <div className={style.part}>
                        <p className={style.welcom}>Tengo experiencia en la creación de aplicaciones web modernas y atractivas.</p>
                        <p className={style.welcom}>Me encanta transformar ideas en productos digitales de alta calidad.</p>
                        <p className={style.welcom}>¡Déjame ayudarte a llevar tu proyecto al siguiente nivel!</p>
                    </div>
                    <button className={style.btnA}><span>¡Contactar ahora!</span></button>
                    <div className={style.contRedes}>
                        <div className={style.redes}>
                            <a href="https://www.linkedin.com/in/ericramirezdev/" target="_blank" rel="noreferrer">
                                <FaLinkedin className={style.icon} />
                            </a>
                        </div>
                        <div className={style.redes}>
                            <a href="https://github.com/sckarlet015" target="_blank" rel="noreferrer">
                                <FaGithub className={style.icon} />
                            </a>
                        </div>
                        <div className={style.redes}>
                            <a href="https://twitter.com/ericramirezdev" target="_blank" rel="noreferrer">
                                <FaTwitterSquare className={style.icon} />
                            </a>
                        </div>
                        <div className={style.redes}>
                            <a href="https://www.instagram.com/ericramirezdev/" target="_blank" rel="noreferrer">
                                <FaInstagramSquare className={style.icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.service} id='servicios'>
                <div className={style.contTitle}>
                    <h2 className={style.title}>MIS SERVICIOS</h2>
                </div>
                <div className={style.contService}>
                    <div className={style.card}>
                        {/* <MdDeveloperMode className={style.iconService} /> */}
                        <img className={style.cardImg} src={desarrollo} alt="" />
                        <div className={style.contTitl}>
                            <h3 className={style.titleCard}>Desarrollo Web</h3>
                        </div>
                        <div className={style.contTxt}>
                            <p className={style.parrafoCard}>Tu marca merece lo mejor. Creo sitios web a medida que reflejan la calidad que tu marca merece...</p>
                        </div>
                        {/* <p className={style.btnTxt}>Saber mas</p> */}
                    </div>
                    <div className={style.card}>
                        {/* <MdOutlineAndroid className={style.iconServiceB} /> */}
                        <img className={style.cardImg} src={movil} alt="" />
                        <div className={style.contTitl}>
                            <h3 className={style.titleCard}>Aplicación Movil</h3>
                        </div>
                        <div className={style.contTxt}>
                            <p className={style.parrafoCard}>Con mi servicio de desarrollo de aplicaciones móviles, creo soluciones innovadoras y personalizadas que llevan tu negocio al siguiente nivel.</p>
                        </div>
                        {/* <p className={style.btnTxt}>Saber mas</p> */}
                    </div>
                    <div className={style.card}>
                        {/* <MdLocalGroceryStore className={style.iconService} /> */}
                        <img className={style.cardImg} src={tienda} alt="" />
                        <div className={style.contTitl}>
                            <h3 className={style.titleCard}>Tienda en linea</h3>
                        </div>
                        <div className={style.contTxt}>
                            <p className={style.parrafoCard}>Con mi servicio de tiendas en línea, creo plataformas de comercio electrónico personalizadas que te ayudan a vender tus productos o servicios de manera efectiva en Internet.</p>
                        </div>
                        {/* <p className={style.btnTxt}>Saber mas</p> */}
                    </div>
                </div>
                <div className={style.contService}>
                    <div className={style.card}>
                        {/* <MdDesignServices className={style.iconService} /> */}
                        <img className={style.cardImg} src={disenio} alt="" />
                        <div className={style.contTitl}>
                            <h3 className={style.titleCard}>Diseño Web</h3>
                        </div>
                        <div className={style.contTxt}>
                            <p className={style.parrafoCard}>Desde la creación de una identidad visual única hasta la optimización de la usabilidad, me aseguro de que tu sitio web refleje la esencia de tu marca y atraiga a tus clientes ideales.</p>
                        </div>
                        {/* <p className={style.btnTxt}>Saber mas</p> */}
                    </div>
                    <div className={style.card}>
                        {/* <FaUserEdit className={style.iconServiceB} /> */}
                        <img className={style.cardImg} src={uxui} alt="" />
                        <div className={style.contTitl}>
                            <h3 className={style.titleCard}>Diseño UX/UI</h3>
                        </div>
                        <div className={style.contTxt}>
                            <p className={style.parrafoCard}>Desde la investigación de usuario hasta el diseño de interfaces intuitivas, me aseguro de que cada interacción sea fluida y memorable.</p>
                        </div>
                        {/* <p className={style.btnTxt}>Saber mas</p> */}
                    </div>
                    <div className={style.card}>
                        {/* <FaPlaceOfWorship className={style.iconServiceB} /> */}
                        <img className={style.cardImg} src={marketing} alt="" />
                        <div className={style.contTitl}>
                            <h3 className={style.titleCard}>CEO Marketing</h3>
                        </div>
                        <div className={style.contTxt}>
                            <p className={style.parrafoCard}>¿Quieres que tu negocio sea encontrado fácilmente en línea y atraiga a más clientes? Con mi servicio de SEO y marketing digital, optimizamos tu presencia en Internet para que tu sitio web aparezca en los primeros resultados de búsqueda.</p>
                        </div>
                        {/* <p className={style.btnTxt}>Saber mas</p> */}
                    </div>
                </div>
            </div>
            <div className={style.acerca} id='acerca'>
                <div className={style.contTitle}>
                    <h2 className={style.title}>SOBRE MI</h2>
                </div>
                <div className={style.info}>
                    <div className={style.contFoto}></div>
                    <div className={style.contAcerca}>
                        <div className={style.pestanias}>
                            <div className={informacionBool ? style.pestaniaActiva : style.pestania} onClick={() => handleChangeSeccion("informacion")}>
                                <p className={style.txt}>Información</p>
                            </div>
                            <div className={backgroundBool ? style.pestaniaActiva : style.pestania} onClick={() => handleChangeSeccion("background")}>
                                <p className={style.txt}>Background</p>
                            </div>
                            {/* <div className={style.pestania} onClick={() => handleChangeSeccion("cursos")}>
                                <p className={style.txt}>Ultimos cursos</p>
                            </div> */}
                        </div>
                        {informacionBool && <div className={style.informacion}>
                            <h1 className={style.subTitle}>Soy Eric Ramirez Desarrollador Web FullStack</h1>
                            <div className={style.partB}>
                                <p className={style.sobremi}>Soy un Desarrollador Full Stack con experiencia en metodologías ágiles, GIT, y bases de datos como PostgreSQL y MySQL. Trabajo con frameworks como React, Express y Sequelize, y domino lenguajes como JavaScript, CSS y HTML. Utilizo herramientas como GitHub, VS Code, pgAdmin e Insomnia para optimizar mi flujo de trabajo. Además, mis conocimientos en diseño UX/UI y marketing digital SEO me permiten crear soluciones centradas en el usuario y optimizadas para motores de búsqueda. Apasionado por la tecnología y la resolución de problemas, busco aportar valor con un enfoque en calidad, eficiencia e innovación en cada proyecto.</p>
                            </div>
                            <div className={style.contDates}>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdOutlineCalendarMonth className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={react} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>ReactJs</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdPhoneInTalk className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={html} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>HTML</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={css} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>CSS</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={nodejs} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>NodeJs</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={javascript} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>JavaScript</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={express} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>Express</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={postgresql} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>postgreSQL</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contDates}>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={vsc} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>VSC</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={insomnia} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>Insomnia</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={git} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>GIT</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={github} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>GitHub</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={figma} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>Figma</p>
                                    </div>
                                </div>
                                <div className={style.date}>
                                    <div className={style.contIcon}>
                                        {/* <MdMail className={style.iconInfo} /> */}
                                        <img className={style.iconInfo} src={googleAds} alt="" />
                                    </div>
                                    <div className={style.contDate}>
                                        <p className={style.dateTitle}>Google Ads</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {backgroundBool && <div className={style.informacion}>
                            <h1 className={style.subTitle}>Antes del codigo</h1>
                            <p className={style.sobremi}>En mi rol como Empowerment Jr. Analyst en DiDi Food durante 5 años, fui responsable de asegurar una experiencia de usuario óptima para los restaurantes desde su onboarding hasta su permanencia a lo largo de los años en la plataforma. Esta posición demandaba una atención al usuario de alta calidad, incluyendo la capacitación en el uso del aplicativo y sus actualizaciones. Mis responsabilidades principales incluían:
                                <ul>
                                    <li>Documentar y analizar errores reportados por los usuarios, verificando la información para remitirla al equipo de producto para su corrección y optimización.</li>
                                    <li>Actuar como el canal de comunicación principal entre la aplicación y los usuarios, lo que también implicaba la creación de documentación y tutoriales en video para capacitación.</li>
                                </ul>
                                Mi papel fue crucial en garantizar que los usuarios tuvieran una experiencia fluida y satisfactoria, además de contribuir activamente a la mejora continua de la plataforma.
                            </p>
                        </div>}
                        {/* {cursosBool && <div className={style.informacion}>
                        <h1 className={style.subTitle}>Ultimos cursos realizados</h1>
                        </div>} */}
                        <div className={style.botonera}>
                            <button className={style.btnA}><span>Contactame</span></button>
                            <button className={style.btnB}><span>Descargar CV</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.portafolio} id='portafolio'>
                <div className={style.contTitle}>
                    <h2 className={style.title}>Mi Portafolio</h2>
                </div>
                <div className={style.contService}>
                    <div className={style.cardA}>
                        <img className={style.cardFondo} src={BSDfondo} alt="" />
                        <img className={style.cardLogo} src={BSDlogo} alt="" />
                        <div className={style.contenCard}>
                            <img className={style.cardLogoB} src={BSDlogo} alt="" />
                            <p className={style.resumen}>Plataforma de comunidad para deportistas que busca conectar reclutadores con perfiles talentosos.</p>
                            <button className={style.btnA} onClick={() => window.location.href = "https://www.bigsportdata.com/"}><span>Visitar sitio</span></button>
                        </div>
                    </div>
                    {/* <div className={style.cardA}>
                        <img className={style.cardFondo} src={BSDfondo} alt="" />
                        <img className={style.cardLogo} src={BSDlogo} alt="" />
                        <div className={style.contenCard}>
                            <img className={style.cardLogoB} src={BSDlogo} alt="" />
                            <p className={style.resumen}>Plataforma de comunidad para deportistas que busca conectar reclutadores con perfiles talentosos.</p>
                            <button className={style.btnA}><span>Visitar sitio</span></button>
                        </div>
                    </div> */}
                </div>
                {/* <div className={style.contService}>
                    <div className={style.cardA}>
                        <img className={style.cardFondo} src={BSDfondo} alt="" />
                        <img className={style.cardLogo} src={BSDlogo} alt="" />
                        <div className={style.contenCard}>
                            <img className={style.cardLogoB} src={BSDlogo} alt="" />
                            <p className={style.resumen}>Plataforma de comunidad para deportistas que busca conectar reclutadores con perfiles talentosos.</p>
                            <button className={style.btnA}><span>Visitar sitio</span></button>
                        </div>
                    </div>
                    <div className={style.cardA}>
                        <img className={style.cardFondo} src={BSDfondo} alt="" />
                        <img className={style.cardLogo} src={BSDlogo} alt="" />
                        <div className={style.contenCard}>
                            <img className={style.cardLogoB} src={BSDlogo} alt="" />
                            <p className={style.resumen}>Plataforma de comunidad para deportistas que busca conectar reclutadores con perfiles talentosos.</p>
                            <button className={style.btnA}><span>Visitar sitio</span></button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className={style.blog}>
                <div className={style.contTitle}>
                    <h2 className={style.title}>Testimonios</h2>
                </div>
                <div className={style.carrousel}>
                    <div className={style.testimonio}>
                        <img className={style.testimonioImg} src={testimonio} alt="" />
                        <p className={style.txtTestimonio}>"Haber trabajado con Eric es de las mejores decisiones que tenido."</p>
                        <div className={style.contNombre}>
                            <p className={style.nombreTestimonio}>Erik Granados</p>
                            <p className={style.posicionTestimonio}>CEO, Big Sport Data</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.contacto}>
                <div className={style.contTitle}>
                    <h2 className={style.title}>Contacto</h2>
                </div>
            </div> */}
            <div className={style.footer}>
                <div className={style.accion}>
                    <p className={style.txtAccion}>Empecemos un proyecto</p>
                    <div className={style.contPregunta}>
                        <p className={style.pregunta}>¿Estas interesado en trabajar juntos? ¡Platiquemos. te invito un café!</p>
                    </div>
                    <button className={style.btnB}><span>¡Vamos!</span></button>
                </div>
                <div className={style.pie}>
                    <img className={style.logo} src={logo} alt="" onClick={() => clckHome()}/>
                    {/* <p className={style.frase}>Aqui una frase conmovedora que me represente en una sola oracion y tiene que ver con el desarrollo.</p> */}
                    <div className={style.contRedesB}>
                        <div className={style.redes}>
                            <a href="https://www.linkedin.com/in/ericramirezdev/" target="_blank" rel="noreferrer">
                                <FaLinkedin className={style.iconB} />
                            </a>
                        </div>
                        <div className={style.redes}>
                            <a href="https://github.com/EricRamirezDev" target="_blank" rel="noreferrer">
                                <FaGithub className={style.iconB} />
                            </a>
                        </div>
                        <div className={style.redes}>
                            <a href="https://twitter.com/ericramirezdev" target="_blank" rel="noreferrer">
                                <FaTwitterSquare className={style.iconB} />
                            </a>
                        </div>
                        <div className={style.redes}>
                            <a href="https://www.instagram.com/ericramirezdev/" target="_blank" rel="noreferrer">
                                <FaInstagramSquare className={style.iconB} />
                            </a>
                        </div>
                    </div>
                    <div className={style.contCreado}>
                        <p className={style.creador}>Creado por Eric Ramirez</p>
                        <p className={style.creador}>Hecho con React</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home