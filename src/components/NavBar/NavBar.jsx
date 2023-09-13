import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={menuOpen ? `${styles.menu} ${styles.active}` : styles.menu}>
        <ul className={styles.options}>
          <li className={styles.option}><a className={styles.optName} href="#inicio">Inicio</a></li>
          <li className={styles.option}><a className={styles.optName} href="#proyectos">Proyectos</a></li>
          <li className={styles.option}><a className={styles.optName} href="#saber-mas">Saber Más</a></li>
          <li className={styles.option}><a className={styles.optName} href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
        <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
        <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
      </div>
    </nav>
  );
};

export default NavBar;
