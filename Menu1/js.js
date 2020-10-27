
let elemento;

function carrega(){
    elemento = document.querySelectorAll('a');
    console.log(elemento);
    elemento.forEach((el) => {
        el.addEventListener('click', (el) => {
            document.querySelector('#texto').innerHTML = el.target.innerHTML;
        });
    });
    
}

