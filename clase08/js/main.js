const contenedor = document.querySelector(".flex-container");
const boton = document.querySelector(".send-button");
boton.value = boton.value.toUpperCase();

function crearProducto(nombre, id, precio){
    img = "<img class='producto-img' src='img/producto.png'>";
    nombre = `<h2>${nombre}</h2>`;
    id = `<h3>${id}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, id, precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 15; i++){
    let idRandom = Math.round( Math.random()*10000);
    let precioRandom = Math.round( Math.random()*10+30);
    let producto = crearProducto(`Curso ${i}`, `ID ${idRandom}`, `${precioRandom} USD`);
    let div = document.createElement("DIV");
    div.addEventListener("click", () => {changeHidden(idRandom)});
    div.tabIndex = i;
    div.classList.add(`ìtem-${i}`,'flex-item');
    div.innerHTML = producto[0] + producto[1] + producto[2] + producto[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
