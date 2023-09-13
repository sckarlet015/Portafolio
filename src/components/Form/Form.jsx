//Bibliotecas
import { useState } from "react";
//Funciones
import { validateRece } from "./validationsForm";
//Estilos
import style from "./Form.module.css";

export default function Form({formRef}) {
    const [seleccionados, setSeleccionados] = useState(0);
    const [errors, setErrors] = useState({});
    const [createRece, setCreateRece] = useState({
        name: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diets: [],
    });
    const initialState = {
        name: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diets: [],
    };
    const resetForm = () => {
        setCreateRece(initialState);
        setErrors({});
        resetCheckboxes();
    };
    const resetCheckboxes = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };
    const manejarCambio = (opcion) => {
        if (seleccionados === 0) {
            setCreateRece((prevCreateRece) => ({
                ...prevCreateRece,
                diets: [...prevCreateRece.diets, opcion],
            }));
            setErrors((prevErrors) =>
                validateRece({ ...createRece, diets: opcion })
            );
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreateRece((prevCreateRece) => ({
            ...prevCreateRece,
            [name]: value,
        }));
        setErrors((prevErrors) => validateRece({ ...createRece, [name]: value }));
    };
    const handlePostRece = async () => {
        const hasErrors = Object.values(errors).some((error) => error !== "");
        if (hasErrors) {
            alert("Lo sentimos, aún hay errores. Por favor, revisa los datos e inténtalo nuevamente.");
            return;
        }
       
        resetForm();
    };
    return (
        <div className={style.form}>
            <h3 ref={formRef}>¿Como seria tu sitio web ideal?</h3>
            <div>
                <div className={style.conten}>
                    <span className={style.title}>¿Cual es tu nombre? </span>
                    <input className={style.inp} name="name" value={createRece.name} onChange={handleInputChange} placeholder=""></input>
                    <p className={style.danger}>{errors.name}</p>
                    <span className={style.title}>¿Como es tu correo? </span>
                    <input className={style.inp} name="name" value={createRece.name} onChange={handleInputChange} placeholder=""></input>
                    <span className={style.title}>¿Cual es el asunto? </span>
                   <select name="asunto" id="" className={style.asuntoSelect}>
                    <option className={style.asunto} value="pagina-web">Asunto</option>
                    <option className={style.asunto} value="pagina-web">Crear sitio web</option>
                    <option className={style.asunto} value="pagina-web">Oferta laboral</option>
                    <option className={style.asunto} value="pagina-web">Colaboracion en un proyecto</option>
                   </select>
                    <span className={style.title}>¿Cuales son los detalles? </span>
                    <textarea className={style.inp} name="summary" value={createRece.summary} onChange={handleInputChange} placeholder="" rows={9} cols={50}></textarea>
                    <p className={style.danger}>{errors.summary}</p>
                </div>
            </div>
            {Object.values(errors).some((error) => error !== "") ? (
                <p className={style.danger}>
                    Llene todos los campos.
                </p>
            ) : (
                <button className={style.crear} onClick={handlePostRece}>
                    Enviar
                </button>
            )}
        </div>
    );
}
