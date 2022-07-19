let carrito = [];
let destinos = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarro();
    }
})

// leo los archivos del JSON
fetch('./data.json')
    .then ((resp) => resp.json())
    .then ((data) => {
        // creo los elementos destinos
        data.forEach((destino) => {
            const div = document.createElement('div');
            div.classList.add("card");
            if(destino.zona == "EUROPA") //elementos de la zona de Europa
            {
            div.innerHTML =
            `
                <img src=${destino.img} alt= "">
                <h3>${destino.lugar}</h3>
                <p>${destino.modo}</p>
                <p class = "precioDestino">Precio:$ ${destino.precio}</p>
                <button id="${destino.id}" class="boton-agregar">Reservar</button>
            `
            contenedorDestinos.appendChild(div); }
            else{
                if(destino.zona == "AMERICA") //elementos de la zona de America
                {
                const div2 = document.createElement('div2');
                div2.classList.add("card");
                div2.innerHTML =
            `
                <img src=${destino.img} alt= "">
                <h3>${destino.lugar}</h3>
                <p>${destino.modo}</p>
                <p class = "precioDestino">Precio:$ ${destino.precio}</p>
                <button id="${destino.id}" class="boton-agregar">Reservar</button>
            `
            contenedorDestinosAmerica.appendChild(div2);}
            else{
                if(destino.zona == "AFRICA") //elementos de la zona de America
                {
                const div = document.createElement('div');
                div.classList.add("card");
                div.innerHTML =
            `
                <img src=${destino.img} alt= "">
                <h3>${destino.lugar}</h3>
                <p>${destino.modo}</p>
                <p class = "precioDestino">Precio:$ ${destino.precio}</p>
                <button id="${destino.id}" class="boton-agregar">Reservar</button>
            `
            contenedorDestinosAfrica.appendChild(div);}
            else{ //elementos de la zona de Paquetes
                const div = document.createElement('div');
                div.classList.add("card");
                div.innerHTML =
            `
                <img src=${destino.img} alt= "">
                <h3>${destino.lugar}</h3>
                <p>${destino.modo}</p>
                <p class = "precioDestino">Precio:$ ${destino.precio}</p>
                <button id="${destino.id}" class="boton-agregar">Reservar</button>
            `
            contenedorDestinosPaquetes.appendChild(div);
            }
            }} 
        
            const btnReserva = document.getElementById(`${destino.id}`);
            btnReserva.addEventListener('click', () => {
                agregarAlCarro(destino.id,data);
            });
        });
    });

//agrego al carro
const agregarAlCarro = (destinoId,data) => {
    const yaExiste = carrito.some(destino => destino.id === destinoId)
        if(yaExiste)
        {
            const destinos = carrito.map(destino => 
                {
                if(destino.id === destinoId)
                {
                    destino.cantidad++
                }})
                }
                else
                {
                    const item = data.find((destino) => destino.id === destinoId);
                    carrito.push(item);
                    console.log(item);  
                    Toastify({
                        text: "Reserva Agregada al Carrito",
                        className: "info",
                        gravity: "top",
                        position: "right",
                        duration: 1500,
                        style: {
                          background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(219,147,11,1) 94%, rgba(255,252,252,1) 100%)",
                        },
                      }).showToast();
                }
        actualizarCarro(); 
}

//actualizo el carro
const actualizarCarro = () => {
    contenedorCarro.innerHTML= "";
    carrito.forEach((destino) => {
    const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML =
    `
        <h3>${destino.lugar}</h3>
        <p>${destino.modo}</p>
        <p class = "precioDestino">Precio:$ ${destino.precio}</p>
        <p class = "cantidadSeleccion">Cantidad: ${destino.cantidad}</p>
        <button onclick="eliminarDelCarro(${destino.id})"class="boton-eliminar">Borrar</button>
    `
    contenedorCarro.appendChild(div);
    
    }) 
    localStorage.setItem('carrito', JSON.stringify(carrito)); // guardo el carro en el local storage
    contadorCarro.innerText = carrito.length // sumo el contador de destinos seleccionados
    const sumaTotal = carrito.reduce((acc,{cantidad , precio}) => acc + cantidad * precio, 0);
    sumaPrecios.innerText = sumaTotal;
    localStorage.setItem('precio',sumaTotal); // guardo el precio en el local storage
};

// elimino un elemento del carro
const eliminarDelCarro = (destinoId) => {
    const item = carrito.find((destino) => destino.id === destinoId);
    const ubicacion = carrito.indexOf(item);
        carrito.splice(ubicacion,1);
        actualizarCarro ();
    };

// vacio todo el carro
vaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarro()
});

carritoX.addEventListener('click', (e) => {
    e.preventDefault(); 
});

continuarAform.addEventListener('click', () =>{
    carrito.length>0 ? window.location.href ="http://127.0.0.1:5500/confirmacion.html" : location.reload();
});