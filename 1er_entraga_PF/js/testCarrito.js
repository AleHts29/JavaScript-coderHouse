class Producto{
    constructor(id, nombre, precio){
        this.id = parseInt(id);
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
            alert(`Se agrego al carrito correctamente el ${this.nombre}`);
        }
    }
    pay(){
        if(this.pagar == false){
            this.pagar = true;
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
        Nombre: <b>${this.nombre}</b></br>
        precio total + IVA: <b>${this.precio}</b></br>
        `
    }
    sumaIva(){
        this.precio = (this.precio * 1.12).toFixed(2);
    }
    total(){
        let suma = 0;
       return suma = parseFloat(this.precio);
    }
}

//Declaro un array de productos para almacenar en objetos
const productos = [];
    productos.push(course1 = new Producto("1","curso_1", "23"));
    productos.push(course2 = new Producto("2","curso_2", "70"));
    productos.push(course3 = new Producto("3","curso_3", "50"));
    productos.push(course4 = new Producto("4","curso_4", "15"));


//Se agrega el IVA a todos los cursos
for (const producto of productos) {
    producto.sumaIva();
    console.log(producto)
} 


let opc;
let sumaProductos = 0;


document.write(`Resumen de compra <br>_____________________________<br>`)


while(opc != "ESC"){
    alert("¿Que curso desea comprar?");
    opc = prompt("1: Curso_1, 2: curso_2, 3: curso_3, 4: curso_4, ESC: Exit");
   
        if(opc == 1){
            course1.addCart();
            document.write(course1.courseInfo());
            sumaProductos += course1.total();
        }
        else if(opc == 2){
            course2.addCart();
            document.write(course2.courseInfo())
            sumaProductos += course2.total();
        }
        else if(opc == 3){
            course3.addCart();
            document.write(course3.courseInfo())
            sumaProductos += course3.total();
        }
        else if(opc == 4){
            course4.addCart();
            document.write(course4.courseInfo())
            sumaProductos += course4.total();
        }
        else if(opc == "ESC"){
            alert("Gracias por elegirnos!")
        }

        else{
            alert("Opción no valida!!");
        }
}


document.write(`<br>Total a pagar:  $${sumaProductos.toFixed(2)}USD`);

