function contieneNumero(name) {
    return /\d/.test(name);
}
function contieneSimbolo(name) {
    return /[^\w\s]/.test(name);
}

function validateMail(mail){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
}


export function validateRece(createRece) {
    const errors = {};
    if (createRece.name.length === 0) {
        errors.name = "El nombre no puede quedar vacio"
    }
    if (contieneNumero(createRece.name)) {
        errors.name = "No debe de incluir numeros"
    }
    if (contieneSimbolo(createRece.name)) {
        errors.name = "No debe de contener simbolos"
    }
    
    if (createRece.summary.length === 0) {
        errors.summary = "El resumen no puede quedar vacio"
    }

    return errors;
}