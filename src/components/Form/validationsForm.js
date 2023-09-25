function contieneNumero(name) {
    return /\d/.test(name);
}

function contieneSimbolo(name) {
    return /[^\w\s]/.test(name);
}

function validateEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

export function validateMail(createMail) {
    const errors = {};

    if (createMail?.name?.length === 0) {
        errors.name = "El nombre no puede quedar vacío";
    }

    if (contieneNumero(createMail?.name)) {
        errors.name = "No debe incluir números";
    }

    if (contieneSimbolo(createMail?.name)) {
        errors.name = "No debe contener símbolos";
    }

    if (!validateEmail(createMail?.email)) {
        errors.email = "Correo inválido";
    }

    if (createMail?.detalles?.length === 0) {
        errors.detalles = 'El campo no debe quedar vacío';
    }

    if (createMail?.asunto?.length === 0) {
        errors.asunto = 'Debe seleccionar un asunto';
    }

    if (createMail?.asunto === "Vacio") {
        errors.asunto = 'Debe seleccionar un asunto';
    }

    return errors;
}
