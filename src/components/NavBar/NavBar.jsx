import style from "./NavBar.module.css";
import logo from "../../assets/logoEric.png"
import { FiGlobe } from 'react-icons/fi';


export default function NavBar() {

  const handleClick = (opc) => {
    switch (opc) {
      case "inicio":
        window.location.href = "#inicio"
        break;

      case "servicios":
        window.location.href = "#servicios"
        break;

      case "acerca":
        window.location.href = "#acerca"
        break;

      case "portafolio":
        window.location.href = "#portafolio"
        break;

      default:
        break;
    }
  }

  return (
    <nav className={style.nav}>
      <div className={style.contLogo}>
        <img className={style.logo} src={logo} alt="logo" />
      </div>
      <div className={style.navLinks}>
        <div className={style.btn} onClick={() => handleClick("inicio")}>
          <p className={style.a}>Inicio</p>
        </div>
        <div className={style.btn} onClick={() => handleClick("servicios")}>
          <p className={style.a}>Servicos</p>
        </div>
        <div className={style.btn} onClick={() => handleClick("acerca")}>
          <p className={style.a}>Acerca</p>
        </div>
        <div className={style.btn} onClick={() => handleClick("portafolio")}>
          <p className={style.a}>Portafolio</p>
        </div>
        {/* <div className={style.btn}>
          <p className={style.a}>Blog</p>
        </div>
        <div className={style.btn}>
          <p className={style.a}>Contacto</p>
        </div> */}
      </div>
      <div className={style.navLinksU}>
        {/* <FiGlobe size={24} color="white" /> */}
        <button className={style.btnA}><span>Contactame</span></button>
      </div>
    </nav>
  );
}