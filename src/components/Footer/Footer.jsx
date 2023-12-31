import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import rocket from "../../Img/Icons/rocket.png"

const Footer = () => {
  const url = "https://eric-dev-584f65d3c2e4.herokuapp.com/"
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>© 2023 Mi Portafolio. Todos los derechos reservados.</p>
       <div className={styles.contFirma}> <p className={styles.firma}> Eric Ramirez</p></div>
      </div>
      <div className={styles.info}>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin">Compartir en </i>
          <FaLinkedin className={styles.icon}/>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin">Compartir en </i>
          <FaFacebook className={styles.icon}/>
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin">Compartir en </i>
          <FaWhatsapp className={styles.icon}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
