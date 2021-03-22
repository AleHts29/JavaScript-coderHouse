const usdOficial = 91.23;
const eurOficial = 108.54;

let yourName = prompt("Ingresa tu Nombre: ");
alert("Hola " + yourName + "!! Gracias por utilizar nuestro servicio online");
let pesosArg = parseInt(prompt("Ingrese el monto a cambiar en pesos Argentinos: "));

let conversionArgToUsd = (parseFloat(pesosArg / usdOficial)).toFixed(2);
let conversionArgToEur = (parseFloat(pesosArg / eurOficial)).toFixed(2);


alert("Su total en dolares es: $" + conversionArgToUsd + "USD");
alert("Su total en euros es: €" + conversionArgToEur + "EUR");
alert("Y recuerda " + yourName + ", esto es al cambio 'OFICIAL' .. Hasta la proxima!! ");