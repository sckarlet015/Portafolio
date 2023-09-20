import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Experiencia from "./Data/Data.json"
import Portada from './components/Portada/Portada';
import ProyectoBox from './components/Proyecto/ProyectoBox';
import Footer from './components/Footer/Footer';
import ImgPF from "./Img/ImgPF/images"
import ImgPI from "./Img/ImgPI/images"
import ImgFood from "./Img/ImgFood/images"
import Info from './components/Info/Info';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import ToggleNavbar from './components/NavBar/ToggleNavBar';


function App() {
  const arrayImage = [ImgPF, ImgPI, ImgFood]

  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const experienceRef = useRef(null);

  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const infoRef = useRef(null);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const handleScroll = () => {

    if (experienceRef.current) {
      const rect = experienceRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        setIsExperienceVisible(true);
        setIsInfoVisible(false)
      }
    }

    if (infoRef.current) {
      const react = infoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (react.top >= 0 && react.bottom <= windowHeight) {
        setIsExperienceVisible(false);
        setIsFormVisible(false)
        setIsInfoVisible(true)
      } 
    }

    if (formRef.current) {
      const react = formRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (react.top >= 0 && react.bottom <= windowHeight) {
        setIsFormVisible(true)
        setIsInfoVisible(false)
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <ToggleNavbar isOpen={isOpen} toggleNavbar={toggleNavbar}/>
      <NavBar toggleNavbar={toggleNavbar}/>
      <Portada />
      <h3 className="subTitle" id='proyectos' >Poyectos</h3>
      <div className='line' ref={experienceRef}></div>
      <div className={`experience ${isExperienceVisible ? 'visible' : ''}`}>
      {Experiencia.map((proyecto, index) => (
        <ProyectoBox
          key={proyecto.nombre}
          nombre={proyecto.nombre}
          descripcion={proyecto.descripcion}
          imagenes={arrayImage[index]}
          linkBack={proyecto.linkBack}
          linkFront={proyecto.linkFront}
          posicionTextoIzquierda={proyecto.posicionTextoIzquierda}
          background={proyecto.background}
          index={index}
        />
      ))}
      <div ></div>
      </div>
      <h3 className="subTitle" id='saber-mas'>Sobre mi</h3>
      <div className='line'></div>
      <div className={`contInfo ${isInfoVisible ? 'visibleInfo' : ''}`} >
      <Info infoRef={infoRef}/>
      </div>
      <h3 className="subTitle" id='contacto'>Contacto</h3>
      <div className='line'></div>
      <div className={`form ${isFormVisible ? 'visibleForm' : ''}`}>
      <Form formRef={formRef}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;