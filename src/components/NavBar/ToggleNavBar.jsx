import React, { useState } from 'react';
import styles from './NavBar.module.css';

const ToggleNavbar = ({isOpen, toggleNavbar}) => {

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
         <button className={styles.toggleButton} onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={styles.navList}>
        <li><a href="#inicio" onClick={toggleNavbar}>Inicio</a></li>
        <li><a href="#proyectos" onClick={toggleNavbar}>Proyectos</a></li>
        <li><a href="#saber-mas" onClick={toggleNavbar}>Saber más</a></li>
        <li><a href="#contacto" onClick={toggleNavbar}>Contacto</a></li>
      </ul>
    </div>
  );
};

export default ToggleNavbar;
