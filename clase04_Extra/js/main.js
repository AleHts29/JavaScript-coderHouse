alert ("Selecconar numero de productos");


function sumaTotal(numProductos){
    const precio = 23.74;
    return precio*numProductos;
}

const precioConIva = (totalSinIva, IVA) => totalSinIva + IVA;
const iva   = x => x * 0.21;

let productosTotal = parseInt(prompt("ingresar cantidad de Productos"));
alert("el total a pagar es: $"+ (precioConIva(sumaTotal(productosTotal), iva(sumaTotal(productosTotal)))).toFixed(2) + "USD + IVA");


