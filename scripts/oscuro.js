const configuracionUsuario = window.matchMedia('(prefers-color-scheme: dark)');  
const boton = document.getElementById('botonTema');
const btn = document.getElementById('nombreBoton');
const configlocal = localStorage.getItem('color');

//verifico el valor del configlocal (dark o light)
if (configlocal === 'dark') {
    document.body.classList.toggle('dark')
    btn.innerHTML='<img src="./media/sol.png" />'
} else if (configlocal === 'light') {
    document.body.classList.toggle('light')
}

// funcion de cambiar de color
boton.addEventListener('click', () =>{
    document.body.classList.toggle("dark");
    btn.innerHTML='<img src="./media/luna.png" />'

    let colorWeb = "light";
        if(document.body.classList.contains("dark")){
            colorWeb = "dark";
            btn.innerHTML='<img src="./media/sol.png" />'
        }
    localStorage.setItem("color", colorWeb);
    
  });
  


