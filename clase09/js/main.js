//Se aplican eventos a un formulario
//Se valida que el mail sea valido
//Se envia el formulario al servidor


const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (evento)=>{
    evento.preventDefault();

    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 4 || nombre.value.length > 30 ){
        error[0] = true;
        error[1] = "El nombre es invalido.";
        return error;
    }else if (email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1 ){
        error[0] = true;
        error[1] = "mail invalido";
        return error;
    }else if(materia.value < 4 || materia.value > 30){
        error[0] = true;
        error[1] = "Materia no valida";
        return error;
    }




    error[0] = false;
    return error;

}