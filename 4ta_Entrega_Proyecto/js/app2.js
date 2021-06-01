const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const dataFragment = document.createDocumentFragment();

// Almacena los objetos selecionados
let carrito2 = {}


document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
})

//Event click
cards.addEventListener('click', e => {
    addCarrito(e);
} )

//accedo al archivo .JSON
const fetchData = async()=>{
    try {
        const levantarDatos = await fetch('./data/data2.json');
        const data = await levantarDatos.json();
       
        htmlCards(data)
    } catch (error) {
        console.log(error)
    }
}

//resto el reflow y pinto las cards en el html
const htmlCards = data =>{
    // console.log(data)
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.price;
        templateCard.querySelector('img').setAttribute("src", producto.image);
        templateCard.querySelector('.btn-outline-dark').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        dataFragment.appendChild(clone);
    })
    cards.appendChild(dataFragment);
}

// Funsion agregar a carrito. Se captura el evento del boton comprar.
const addCarrito = e => {
    // console.log(e.target.classList.contains('btn-outline-dark')); //se obtiene un true
    if (e.target.classList.contains('btn-outline-dark')){
        console.log(e.target.parentElement.parentElement)
        setCarrito(e.target.parentElement.parentElement)
    }
    // Evito que se propaguen los eventos del contenedor cards ya que se heredan del padre
    e.stopPropagation();
}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-outline-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        img: objeto.querySelector('img').src,
        cantidad: 1
    }
    // Aumento de la cantidad de productos, si existe el producto lo incremento
    if(carrito2.hasOwnProperty(producto.id)){
        producto.cantidad = carrito2[producto.id].cantidad+1;
    }
    carrito2[producto.id] = {...producto} //Spread Operator - hacemos una copia de producto
    pintarCarrito();
}

// pintar carrito
const pintarCarrito = () =>{
    // console.log(carrito2)
    // Limpio el html
    items.innerHTML = '';
    Object.values(carrito2).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id;
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio;

        const clone = templateCarrito.cloneNode(true);
        dataFragment.appendChild(clone);
    })
    items.appendChild(dataFragment);

    pintarFooter();
}

const pintarFooter = () => {
    footer.innerHTML = '';
    if(Object.keys(carrito2).lenght === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5"> Carrito vacio - llenar</th>
        `
    }
}

