localStorage.getItem("saludo",);
localStorage.setItem('sudo', "")
console.log("Esta comprando", saludo);

// Opción 1 ->  localStorage.setItem(name, content)
// Opción 2 ->localStorage.name = content
// name = nombre del elemento
// content = Contenido del elemento

localStorage.setItem('Nombre', 'Miguel Antonio')
localStorage.Apellido = 'Márquez Montoya'

const verCarrito1JSON = JSON.stringify(verCarrito);
console.log(verCarrito1JSON);

localStorage.setItem("verCarrito", verCarrito1JSON);

const objCarritoJSON = localStorage.getItem("verCarrito");
const objCarrito = JSON.parse(objCarritoJSON);
console.log(objCarrito);