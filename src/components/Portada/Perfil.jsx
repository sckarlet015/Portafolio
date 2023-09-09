import React from 'react'
import styles from "./Portada.module.css"
import Foto from "../../Img/Foto.jpg"

const Perfil = () => {
    const fotoPerfilURL = Foto;
  return (
    <div className={styles.cont}>
                    <span className={styles.top}></span>
                    {/* <span className={styles.rigth }></span> */}
                    <img className={styles.perfil} src={fotoPerfilURL} alt="Foto de perfil" />
                    {/* <span className={styles.bottom}></span>
                    <span className={styles.left}></span> */}
                </div>
  )
}

export default Perfil