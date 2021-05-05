const carro = new Carrito();

const carrito = document.getElementById('carrito');

// Contiene el catalogo de productos
const productos = document.getElementById('lista-productos');

// Accedemos a la lista de productos(tbody), donde vamos a insertar los elementos HTML
const listaProductos = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

const procesarPedidoBtn = document.getElementById('procesar-pedido');


cargarEventos()


function cargarEventos(){
    productos.addEventListener('click',(e)=>{carro.comprarProducto(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener('click', (e) => {carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}