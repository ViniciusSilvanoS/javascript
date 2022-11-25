/**
Crie uma aplicação que peça que o usuário escolha entre Pedra, Papel ou Tesoura.

O programa deve escolher uma dessas opções aleatoriamente, informar para o usuário qual foi a escolha sorteada e também, se ele ganhou ou não do programa.
 */

const vlMax = 3;
const vlMin = 1;
let aleatorio = Math.floor((Math.random() * (vlMax - vlMin + 1)) + vlMin);

let escolha;

while(true){
    escolha = Number(prompt("Digite:\n(1) PEDRA\n(2) PAPEL\n(3) TESOURA"));
    if(escolha === 1 || escolha === 2 || escolha === 3){
        break;
    }else{
        alert("Você digitou um valor inválido!");
    }
}

if(aleatorio === 1){
    alert("Maquina: PEDRA");
}else if(aleatorio === 2){
    alert("Maquina: PAPEL");
}else{
    alert("Maquina: TESOURA");
}

if(escolha === 1){ // PEDRA
    if(aleatorio === 1){
        alert("Empate!")
    }else if(aleatorio === 2){
        alert("Você perdeu.");
    }else{
        alert("Você ganhou!!!")
    }
}else if(escolha === 2){ // PAPEL
    if(aleatorio === 1){
        alert("Você ganhou!!!")
    }else if(aleatorio === 2){
        alert("Empate!");
    }else{
        alert("Você perdeu.")
    }
}else{ // TESOURA
    if(aleatorio === 1){
        alert("Você perdeu.")
    }else if(aleatorio === 2){
        alert("Você ganhou!!!");
    }else{
        alert("Empate!")
    }
}