import React from 'react';
import styles from "./Contact.module.css"

const Contact = () => {
  const handleContactClick = () => {
    const emailAddress = 'sckarlet015@gmail.com';
    const subject = '¡Hola te contacto desde tu Portafolio!';
    const message = 'Hola, estoy interesado en contactarte para...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.cont}>
      <button className={styles.btn} onClick={handleContactClick}>
      Curriculum
    </button>
    <button className={styles.btn} onClick={handleContactClick}>
      Contactame
    </button>
    </div>

  );
};

export default Contact;
