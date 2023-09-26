import { useState } from "react";
import { validateMail } from "./validationsForm";
import style from "./Form.module.css";
import axios from "axios";

export default function Form({ formRef }) {
  const [errors, setErrors] = useState({});
  const [createMail, setCreateMail] = useState({
    name: "",
    email: "",
    asunto: "Vacio",
    detalles: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateMail((prevCreateMail) => ({
      ...prevCreateMail,
      [name]: value,
    }));
    setErrors((prevErrors) => validateMail({ ...createMail, [name]: value }));
  };

  const handleAsuntoChange = (e) => {
    const { name, value } = e.target;
    setCreateMail((prevCreateMail) => ({
      ...prevCreateMail,
      [name]: value,
    }));
  };

const handlePostRece = async () => {
  const hasErrors = Object.values(errors).some((error) => error !== "");
  if (hasErrors) {
    alert("Lo sentimos, aún hay errores. Por favor, revisa los datos e inténtalo nuevamente.");
    return;
  } else {
    try {
      const response = await axios.post("https://portafolioback-583e1a26d22c.herokuapp.com/send-email", createMail, {
        withCredentials: true, 
      });
      alert("Mensaje enviado");
      
      console.log(response.data);
    } catch (error) {
      alert("Error al enviar el mensaje: " + error.message);
    }
    resetForm();
  }
};


  const resetForm = () => {
    setCreateMail({
      name: "",
      email: "",
      asunto: "Vacio",
      detalles: "",
    });
    setErrors({});
  };

  return (
    <div className={style.form}>
      <h3 ref={formRef}>¿Cómo sería tu sitio web ideal?</h3>
      <div>
        <div className={style.conten}>
          <span className={style.title}>¿Cuál es tu nombre? </span>
          <input className={style.inp} name="name" value={createMail.name} onChange={handleInputChange} />
          <p className={style.danger}>{errors.name}</p>
          <span className={style.title}>¿Cuál es tu correo? </span>
          <input className={style.inp} name="email" value={createMail.email} onChange={handleInputChange} />
          <p className={style.danger}>{errors.email}</p>
          <span className={style.title}>¿Cuál es el asunto? </span>
          <select name="asunto" value={createMail.asunto} onChange={handleAsuntoChange} className={style.asuntoSelect}>
            <option value="Vacio">Asunto</option>
            <option value="Crear sitio web">Crear sitio web</option>
            <option value="Oferta laboral">Oferta laboral</option>
            <option value="Colaboración en un proyecto">Colaboración en un proyecto</option>
          </select>
          <p className={style.danger}>{errors.asunto}</p>
          <span className={style.title}>¿Cuáles son los detalles? </span>
          <textarea className={style.inp} name="detalles" value={createMail.detalles} onChange={handleInputChange} rows={9} cols={50}></textarea>
          <p className={style.danger}>{errors.detalles}</p>
        </div>
      </div>
      {Object.values(errors).some((error) => error !== "") ? (
        <p className={style.danger}>Llene todos los campos.</p>
      ) : (
        <button className={style.crear} onClick={handlePostRece}>
          Enviar
        </button>
      )}
    </div>
  );
}
