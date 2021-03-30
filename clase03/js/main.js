const numExamenes = 3;
const nota = 4;
const notaMax = 10;



let myName = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");

if ((myName != "") && (lastName != "")){
    alert("Alumno: " + myName + " " + lastName);
}else{
    alert("Error: Por favor ingrese Nombre y Apellido");
}

let calificacion1 = parseInt(prompt ("Ingrese calificación del primer examen: "));
let calificacion2 = parseInt(prompt ("Ingrese calificación del segundo examen: "));
let calificacion3 = parseInt(prompt ("Ingrese calificación del tercer examen: "));

let promedio = ((calificacion1 + calificacion2 + calificacion3)/numExamenes);


if(promedio < nota){
    alert("El alumno: " + myName + " " + lastName + ": No aprueba la asignatura, debe recursar");
}else if((promedio >= nota) && (promedio < notaMax) ){
    alert("El alumno: " + myName + " " + lastName +  ": Se encuentra aprobado, debe rendir final");
}else if (promedio == notaMax){
    alert("El alumno: " + myName + " " + lastName +  ": Se encuentra aprobado, promociona");
}else{
    alert("Ingreso de datos incorrecto");
}