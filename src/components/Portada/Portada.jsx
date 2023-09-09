import React from 'react';
import styles from "./Portada.module.css"
import Gif from "../../Img/anyskof.gif"
import Atom from "../../Img/Atomo_19.gif"
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Contact from '../Contact/Contact';
import Perfil from './Perfil';

const Portada = () => {
    const fotoPerfilURL = Gif;
    const linkedinURL = 'https://www.linkedin.com/in/ericramirezdev/';
    const githubURL = 'https://github.com/sckarlet015';
    const facebookURL = 'https://www.facebook.com/EricRamirezDeveloper/';

    return (
        <div>
            <div className={styles.portada}>
                <div className={styles.cont}>
                    <span className={styles.top}></span>
                    <div className={styles.ContImg}>
                    <img className={styles.perfil} src={fotoPerfilURL} alt="Foto de perfil" />
                    </div>
                </div>
                <div>
                    <div className={styles.motion}>
                        <h3>"Programando ideas en el lienzo digital, fusiono creatividad e innovación para tejer soluciones únicas en el vasto universo de la programación."</h3>
                    </div>
                    <div className={styles.redes}>
                        <div className={styles.contIcon}>
                            <span>@EricRamirezDev</span>
                            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icon} />
                        </a>
                        </div>
                        <div className={styles.contIcon}>
                            <span>@sckarlet015</span>
                            <a href={githubURL} target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        </div>
                        <div className={styles.contIcon}>
                            <span>@EricRamirezDeveloper</span>
                            <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className={styles.icon} />
                        </a>
                        </div>
                    </div>
                </div>
                <div className={styles.loadingio}>
                    <div className={styles.ldio}>
                        <div>
                            <img src={Atom} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Portada;
