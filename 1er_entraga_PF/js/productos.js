class Producto{
    constructor(nombre, precio){
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);

        this.vendido = false;
        this.addToCart = false;
        this.pagar = false;
        this.descargar = false;
    }
    addCart(){
        if(this.addToCart == false){
            this.addToCart = true;
            alert(`Se agrego al carrito correctamente el Curso`);
        }
    }
    pay(){
        if(this.pagar == false){
            this.pay = true;
            alert("Compra exitosa");
        }
    }
    downLoad(){
        if(this.descargar == false){
            this.descargar = true;
            alert("Se descargo el archivo corectamente");
        }
    }
    courseInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        peso: <b>${this.peso}</b></br>`
    }
    sumaIva(){
        this.precio = (this.precio * 1.12).toFixed(2);
    }
}

//Declaro un array de productos para almacenar en objetos
const productos = [];
    productos.push(new Producto("curso1", "23"));
    productos.push(new Producto("curso2", "70"));
    productos.push(new Producto("curso3", "50"));
    productos.push(new Producto("curso4", "15"));
    

for (const producto of productos) {
    producto.sumaIva();
    console.log(producto)
} 

alert("Todos los productos tienen IVA incluido")



