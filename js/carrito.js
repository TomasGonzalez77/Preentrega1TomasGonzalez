const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "✖";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}"
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio}</p>
        <span class="restar">➖</span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar">➕</span>
        <p>Total ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent)

        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {
            if(product.cantidad !== 1)
            product.cantidad--;
            pintarCarrito();
            guardadoLocal();
        });

        let sumar = (carritoContent.querySelector(".sumar"))
        sumar.addEventListener("click", () =>{
            product.cantidad++;
            pintarCarrito();
            guardadoLocal();
        })

        console.log(carrito.length);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "eliminar-producto";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `total a pagar: $ ${total}`;
    modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const foundID = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundID;
    })

    carritoCounter();
    guardadoLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
