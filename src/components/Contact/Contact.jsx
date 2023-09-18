import React from 'react';
import styles from "./Contact.module.css"

const Contact = () => {
  const handleContactClick = () => {
    const emailAddress = 'sckarlet015@gmail.com';
    const subject = '¡Te contacto desde tu Portafolio!';
    const message = 'Hola, estoy interesado en contactarte para...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  const handleCVClick = () => {
    const mailtoLink = "https://docs.google.com/document/d/1RdumZITDFNPt157vyhozUCQzcxb6itCY/edit?usp=sharing&ouid=117723305031842063902&rtpof=true&sd=true";
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.cont}>
      <button className={styles.btn} onClick={handleCVClick}>
      Curriculum
    </button>
    <button className={styles.btn} onClick={handleContactClick}>
      Contactame
    </button>
    </div>

  );
};

export default Contact;
