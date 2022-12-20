let a = document.querySelector("div.flex input");
a.addEventListener('click', jogar);

function jogar(){
    let numeros = document.getElementById('numeros');
    let msg = document.getElementById('msg');
    let aleat = aleatorio();

    if(numeros.innerHTML.indexOf(" " + aleat + " ") == -1){
        numeros.style.color = 'green';
        numeros.innerHTML += aleat + " ";
    }else{
        msg.style.color = 'red';
        msg.innerHTML = "Repetido: " + aleat;
    }

}

function aleatorio(){
    const vlMin = 1;
    const vlMax = 15;
    let aleatorio = Math.floor((Math.random() * (vlMax - vlMin + 1)) + vlMin);

    return aleatorio;
}