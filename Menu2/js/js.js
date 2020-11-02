const principal = document.querySelector("#principal");
const configuracao = document.querySelector("#configuracao");


/*document.getElementById('principal').addEventListener("Click", menu(principal));

configuracao.getElementById('configuracao').addEventListener("click", menu(configuracao), false);*/


function menu(event){
    const elementos = event.querySelectorAll('a');
    const todos = document.querySelectorAll('a');
    todos.forEach(elemento => elemento.classList.remove("animate-down"));
    const todosLi = document.querySelectorAll("li");
    todosLi.forEach(elemento => elemento.style.height = '18px');
    altura = 18;
    var time = 0;
        elementos.forEach(elemento =>{
            altura = altura + 18;
            event.style.height = altura + "px";
            elemento.classList.add('animate-down');
            elemento.style.animationDelay = time + "ms";
            time += 50;
            
        }
    )    
};
