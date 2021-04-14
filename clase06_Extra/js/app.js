const productos = [
    {id: 1, producto: "Celular iphone12", precio: 125},
    {id: 2, producto: "ipad", precio: 1000},
    {id: 3, producto: "SmartShach3", precio: 600},
    {id: 4, producto: "Celular Nokia", precio: 350},
    {id: 5, producto: "Celular iphoneX", precio: 125},
    {id: 6, producto: "Tablet Samsumg", precio: 1000},
    {id: 7, producto: "SmartWhach4", precio: 600},
    {id: 8, producto: "Celular Motorola-Platino", precio: 400},
    {id: 9, producto: "Celular Nokia-S", precio: 400},
    {id: 10, producto: "Celular iphone8", precio: 125},
    {id: 11, producto: "Tablet Samsumg a10", precio: 1000},
    {id: 12, producto: "SmartWhach5", precio: 600},
    {id: 13, producto: "Celular Motorola g8 plus", precio: 720}
]

//Orden bajo criterio de ID
const productosOrdenados_ID = productos.sort((a,b) =>{
    return a.id - b.id;
    }
)
console.log(productosOrdenados_ID);


//Orden bajo criterio de ID
// const productosOrdenados_Nombre = productos.sort((a,b) =>{
//     return (a.producto < b.producto) ? -1 : 1;
//     }
// )
// console.log(productosOrdenados_Nombre);