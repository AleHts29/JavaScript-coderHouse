alert ("Selecconar productos");


function sumaTotal(numProductos){
    const precio = 23.74;
    return precio*numProductos;
}

let productosTotal = parseInt(prompt("ingresar cantidad de Productos"));
alert("el total a pagar es: $"+ sumaTotal(productosTotal)+ "USD");
