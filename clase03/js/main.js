
let resultado;
let total;
let opcTemperature
let unidadTemp;

alert("Elija opción a la que desea convertir: ");
opcTemperature = parseInt(prompt("1- Convertir a Celsius ó 2-Convertir a Fahrenheit: "));

    if(opcTemperature == 1){
        unidadTemp = "Fahrenheit";
    }else if(opcTemperature == 2){
        unidadTemp = "Celsius";
    }else{
        alert("Error: Opcion no valida")
    }


while((opcTemperature == 2)|| (opcTemperature == 1)){
    let temperature = parseInt(prompt("Ingrese valor de Temperatura "+ "(" + unidadTemp + ")"));
    switch(opcTemperature){
        case 1:
            resultado = ("CELCIUS");
            break;    
        default:
            resultado = ("FAHRENHEIT");
            break;
    }


    switch(resultado){
        case "CELCIUS":
             total = ((temperature - 32)*(5/9)).toFixed(2);
            alert(temperature + " grados Fahrenheit, son: " + total + " grados Celsius.");
            break;
        default:
             total = (((temperature)*(5/9))+ (32)).toFixed(2);
            alert(temperature + " grados Celsius, son: " + total + " grados Fahrenheit.");
            break;
    }
    alert("Elija opción a la que desea convertir: ");
    opcTemperature = parseInt(prompt("1- Convertir a Celsius ó 2-Convertir a Fahrenheit: "));

}
