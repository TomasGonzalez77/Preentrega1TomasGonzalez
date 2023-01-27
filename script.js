const productos = [

    { nombre: "paleta", valor: 2000 },
    { nombre: "pelota", valor: 500 },
    { nombre: "muñequera", valor: 1000 },
    { nombre: "grip", valor: 600 },
];

let carrito = []

let seleccion =
    prompt("¡Hola! Bienvenido a nuestra tienda, ¿desea realizar una compra?")

while (seleccion != "si" && seleccion != "no") {
    alert("¡Hey! Ingrese si o no para continuar")
    seleccion =
        prompt("¡Hola! Bienvenido a nuestra tienda, ¿desea realizar una compra?")
}

if (seleccion == "si") {
    alert("¡Nuestros productos")
    let nuestrosproductos = productos.map(
        (producto) => producto.nombre + " " + producto.valor);
    alert(nuestrosproductos.join(" | "))
    console.log(nuestrosproductos)
} else if (seleccion == "no") {
    alert("Que lastima 😓 esperamos que pronto cambies de opinion. ¡Hasta luego!")
}

while (seleccion != "no") {
    let producto = prompt("¡Agrega tus productos!")
    let valor = 0
    if (producto == "paleta" || producto == "pelota"
        || producto == "muñequera" || producto == "grip") {
        switch (producto) {
            case "paleta":
                precio = 2000;
                break;
            case "pelota":
                precio = 500;
                break;
            case "muñequera":
                precio = 1000;
                break;
            case "grip":
                precio = 600;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt
            ("¿Cuantas unidades de este producto desea agregar?"))
        carrito.push({ producto, unidades, valor })
        console.log(carrito)
    } else {
        alert("Ese producto no esta disponible")
    }
    seleccion = prompt("¿Desea agregar algo mas?")
    while (seleccion === "no") {
        alert("¡Gracias por tu compra!")
        carrito.forEach((carritoFinal) => { console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total: ${carritoFinal.unidades * carritoFinal.valor}`) })
        break
    }
}

const total = carrito.reduce((acc,el) => acc + el.valor * el.unidades, 0)
console.log(`El valor total de su compra es: ${total}`)