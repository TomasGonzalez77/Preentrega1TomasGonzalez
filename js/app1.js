//Class moldeadora de objetos "productos"
class Producto {
    constructor(id, nombre, valor, stock, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.stock = stock;
        this.imagen = imagen;
    }
    restaStock() {
        this.stock = this.stock - 1
        console.log(`el stock de ${this.stock} ha sido actualizado`)
    }
}

//Crear objetos de "producto"

const producto0 = new Producto(0, 'Paleta', 20000, 10, 'paleta.png');
const producto1 = new Producto(1, 'Grip', 500, 60, 'grip.png');
const producto2 = new Producto(2, 'Protector', 700, 60, 'protector.png');
const producto3 = new Producto(3, 'Muñequera', 500, 20, 'muñequera.png');
const producto4 = new Producto(4, 'Medias', 1000, 20, 'medias.png');
const producto5 = new Producto(5, 'Pelota', 700, 100, 'pelota.png')

const productos = [producto0, producto1, producto2, producto3, producto4]

//Funcion para insertar Cards con informacion en DOM

const cardBootstrap = (listaStock) => {
    for (elem of listaStock) {
        let card = document.createElement("div") //<div></div>
        card.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="./image/${elem.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${elem.nombre}</h5>
          <p class="card-text">¡Con el increible valor de $${elem.valor}!.</p>
          <a href="#" type="button" value="comprame" onclick="agregarCarrito(${elem.id})" class="btn btn-primary">Comprame</a>
        </div>
      </div>`
        document.body.append(card) //Insertar Card en el boddy
    }
}
cardBootstrap(productos)

const arrayCarrito = []
const existeEnCarrito = []
let SumaStock = []

class ObjCarrito {
    constructor(producto, cant) {
        this.producto = producto;
        this.cantidad = cant;
    }
    sumaStock() {
        this.cantidad = this.cantidad + 1
    }
}

function agregarCarrito(prod) {
    let agregadoCarrito = arrayCarrito.find(e => e.producto == prod)
    if (existeEnCarrito != undefined) {
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeEnCarrito.producto)
        arrayCarrito[posicion].sumaStock()
    } else {
        const AlCarrito = new ObjCarrito(prod, 1)
        arrayCarrito.push(AlCarrito)
        console.log(arrayCarrito)
    }
}
