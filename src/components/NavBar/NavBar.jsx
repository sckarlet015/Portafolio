import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = ({toggleNavbar}) => {

  return (
    <nav className={styles.navBar}>
      <button className={styles.toggleButton} onClick={toggleNavbar}>
        ☰
      </button>
      <div className={styles.menu}>
        <ul className={styles.options}>
          <li className={styles.option}><a className={styles.optName} href="#inicio">Inicio</a></li>
          <li className={styles.option}><a className={styles.optName} href="#proyectos">Proyectos</a></li>
          <li className={styles.option}><a className={styles.optName} href="#saber-mas">Saber Más</a></li>
          <li className={styles.option}><a className={styles.optName} href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
