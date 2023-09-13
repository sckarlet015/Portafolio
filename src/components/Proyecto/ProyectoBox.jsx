import React from 'react';
import styles from './ProyectoBox.module.css'; 
import JS from "../../Img/Tech/javascript.png"
import CSS from "../../Img/Tech/css.png"
import HTML from "../../Img/Tech/html.png"
import REACT from "../../Img/Tech/logo512.png"
import NODE from "../../Img/Tech/node.png"
import EXPRESS from "../../Img/Tech/express.png"

const ProyectoBox = ({nombre, descripcion, imagenes, linkBack, linkFront, posicionTextoIzquierda, background, index, changeModal }) => {
  const textoPosition = posicionTextoIzquierda ? 'izquierda' : 'derecha';

  const onUrl = () => {
    window.open(linkFront, '_blank');
  }

  return (
    <div className={styles.carGame} onClick={() => {onUrl()}}>
      <div className={styles.imageContainer}>
        <div className={styles.spaceImage}>
          <img src={imagenes[0]} className={styles.image} />
        </div>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h3 className={styles.name}>{nombre}</h3>
            <p className={styles.descrip}>{descripcion}</p>
            <div className={styles.contTech}>
              <img className={styles.tech} src={JS} alt="JavaScript"/>
              <img className={styles.tech} src={CSS} alt="CSS3"/>
              <img className={styles.tech} src={HTML} alt="HTML"/>
              <img className={styles.tech} src={REACT} alt="REACT.JS"/>
              <img className={styles.tech} src={NODE} alt="NODE.JS"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoBox;
