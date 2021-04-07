class producto{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.addToCart = false;
        this.pagar = false;
        this.descargar = false;
    }
    addCart(){
        if(this.addToCart == false){
            this.addToCart = true;
            alert("Se agrego al carrito correctamente");
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
}


//Objetos
course = new producto("20.000", "5 estrellas", "900mb");

course1 = new producto("30.000", "5 estrellas", "1900mb");
course2 = new producto("10.500", "3 estrellas", "500mb");
course3 = new producto("15.800", "4 estrellas", "1200mb");
course4 = new producto("22.300", "5 estrellas", "1000mb");

//Simulacion de compra y descarga de un producto (curso)
/* 
course.addCart();
course.pay();
course.downLoad();
*/

document.write(`
    ${"Info del curso Opc A <br>" + course1.courseInfo()}<br>
    ${"Info del curso Opc B <br>" + course2.courseInfo()}<br>
    ${"Info del curso Opc C <br>" + course3.courseInfo()}<br>
    ${"Info del curso Opc D <br>" + course4.courseInfo()}<br>
    `
)

