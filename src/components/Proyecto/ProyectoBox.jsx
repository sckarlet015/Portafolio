import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ProyectoBox.module.css'; // Asegúrate de tener estilos para este componente

const ProyectoBox = ({nombre, descripcion, imagenes, linkBack, linkFront, posicionTextoIzquierda, background, index, changeModal }) => {
  const textoPosition = posicionTextoIzquierda ? 'izquierda' : 'derecha';

  return (
    <div className={`${styles['proyecto-box']} ${styles[`texto-${textoPosition}`]} ${styles[background]}`}>
      <div className={styles['descripcion']}>
      <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <div className={styles.links}>
        <a  href={linkBack} target="_blank" rel="noopener noreferrer">
          {linkBack.length > 0 && <p className={styles.linkA}>REPO BACK</p> }
        </a>
        <a href={linkFront} target="_blank" rel="noopener noreferrer">
          {linkFront.length > 0 && <p className={styles.linkA}>REPO FRONT</p> }
        </a>
        <p className={styles.linkA} onClick={() => changeModal(index)}>Ver</p>
        </div>
      </div>
      <div className={styles['carrusel']}>
        <Carousel autoPlay infiniteLoop showStatus={false}>
          {imagenes.map((imagen, index) => (
            <div key={index}>
              <img className={styles.image} src={imagen} alt={`Captura ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProyectoBox;
