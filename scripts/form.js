let carr = [];
let tieneNumero = /\d/;

document.addEventListener('DOMContentLoaded',() => {
    let carr = JSON.parse(localStorage.getItem('carrito')); // obtengo los elementos del Local Storage Guardados
    carr.forEach(destino => {
    {
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML =
        `
            <h3>${destino.lugar}</h3>
            <p>${destino.modo}</p>
            <p class = "precioDestino">Precio:$ ${destino.precio}</p>
            <p class = "cantidadSeleccion">Cantidad: ${destino.cantidad}</p> 
        `
        contenedorCarro.appendChild(div);
    }})
    contadorCarro.innerText = carr.length;
    const sumaTotal = localStorage.getItem('precio');
    sumaTotalFinal.innerText = sumaTotal; //muestro el precio final a pagar
})

btnVolver.addEventListener('click',() => {
    window.location.href = "http://127.0.0.1:5500/index.html";
})

carritoX.addEventListener('click', (e) => {
    e.preventDefault(); 
});

//boton finalizar compra
finalizarCompra.addEventListener('click', (e) =>{
    e.preventDefault(); 
    if(nombre.value == '' || tieneNumero.test(nombre.value) || apellido.value == '' || tieneNumero.test(apellido.value) || email.value == '' || tipoDocu.value == '' || numeroDocu.value == "" || !tieneNumero.test(numeroDocu.value) || telefono.value == '' || !tieneNumero.test(telefono.value))
    {   
        Swal.fire({ //en caso de no validarse los datos
            icon: 'warning',
            title: 'Error Carga de Datos',
            text: 'Debe completar todos los campos',
            timer: 3500
          })
    }else
    {
        Swal.fire({//en caso de confirmarse todo
            icon: 'success',
            title: 'Reserva Confirmada',
            text: 'Se te enviaran los datos por mail',
            timer: 3500
          })
    }
})

//reseteo formulario
const resetearFormulario = () => {
    nombre.value = '';
    apellido.value = '';
    email.value = '';
    tipoDocu.value = '';
    numeroDocu.value = '';
    numeroDocu.value = '';
}

// formato el email
const validarEmail = (email) => {
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const valida=expReg.test(email);
    return valida;
}

//validamos los input

nombre.addEventListener('blur', ()=>{
    if (nombre.value == '' || tieneNumero.test(nombre.value)){
        nombre.classList.add('invalido');
    }else{
        nombre.classList.contains('invalido') && nombre.classList.toggle('invalido');
        }
});

apellido.addEventListener('blur', ()=>{
    if (apellido.value == '' || tieneNumero.test(apellido.value)){
        apellido.classList.add('invalido');
    }else{
        apellido.classList.contains('invalido') && apellido.classList.toggle('invalido');
        }
});

email.addEventListener('blur', () =>{
    if(email.value == '' || valida==false){
       email.classList.add('invalido');  
    }else{
        email.classList.contains('invalido') && email.classList.toggle('invalido');
    }
});

tipoDocu.addEventListener('blur', ()=>{
    if (tipoDocu.value == ''){
        tipoDocu.classList.add('invalido');
    }else{
        tipoDocu.classList.contains('invalido') && tipoDocu.classList.toggle('invalido'); 
        }
  
});

numeroDocu.addEventListener('blur', ()=>{
    if (numeroDocu.value == "" || !tieneNumero.test(numeroDocu.value)){
        numeroDocu.classList.add('invalido');
    }else{
        numeroDocu.classList.contains('invalido') && numeroDocu.classList.toggle('invalido');
        }
});

telefono.addEventListener('blur', ()=>{
    if (telefono.value == '' || !tieneNumero.test(telefono.value)){
        telefono.classList.add('invalido');
    }else{
        telefono.classList.contains('invalido') && telefono.classList.toggle('invalido');
    }
});

