localStorage.setItem("saludo", saludo)
localStorage.getItem("saludo")
console.log("Esta comprando", saludo);

const guardadoLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));