import React, { useState } from 'react';
import './App.css';
import Experiencia from "./Data/Data.json"
import Portada from './components/Portada/Portada';
import ProyectoBox from './components/Proyecto/ProyectoBox';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ModalViewer from './components/ModalView/ModalViewer';
import ImgPF from "./Img/ImgPF/images"
import ImgPI from "./Img/ImgPI/images"
import ImgFood from "./Img/ImgFood/images"
import Tech from './components/TechKills/Tech';
import Info from './components/Info/Info';
import NavBar from './components/NavBar/NavBar';


function App() {
  const arrayImage = [ImgPF, ImgPI, ImgFood]
  const [boolModal, setBoolModal] = useState(false)
  const [idImg, setIdImg] = useState(0)

  const changeModal = (i) => {
    setIdImg(i)
    setBoolModal(true)
  }

  const modalOnClose = () => {
    setBoolModal(false)
  }

  return (
    <div className="App">
      <NavBar/>
      <Portada/>
      <div className='experience'>
      </div>
      <Footer/>
    </div>
  );
}

export default App;