/*
Crie uma aplicação que peça que o usuário escolha entre Par ou Ímpar.

O programa deve escolher um número aleatório entre 1 e 100, informar para o usuário qual foi o número sorteado e também, se ele escolheu corretamente entre ser Par ou Ímpar.
 */

const vlMax = 100;
const vlMin = 1;
let aleatorio = Math.floor((Math.random() * (vlMax - vlMin + 1)) + vlMin);
let parImpAleatorio;

let escolha;
while(true){
    escolha = Number(prompt("Digite 1 para IMPAR e 2 para PAR"));
    if(escolha === 1 || escolha === 2){
        break;
    }else{
        alert("Você digitou um valor inválido!");
    }
}

alert("O número gerado aleatoriamente é " + aleatorio);

if(aleatorio % 2 != 0){
    parImpAleatorio = 1;
}else{
    parImpAleatorio = 2;
}

if(parImpAleatorio == escolha){
    alert("Você escolheu corretamente!");
}else{
    alert("Escolha incorreta!");
}


























// let escolha = validaUmDois();

// let aleatorio = geraAleatorio();

// let result = aleatorio % 2;

// alert("O número sorteado foi " + aleatorio + " ")






// /* FUCNTIONS */

// function validaUmDois(){
//     let num;
//     while(true){
//         num = Number(prompt("Escolha se você quer par ou ímpar. \nDIGITE: PAR ou ÍMPAR"));
//         if(num == 2){
//             return 2; // Retorna PAR
//         }else if(num == 1){
//             return 1; // Retorna ÍMPAR
//         }else{
//             alert("Opção inválida. Digite novamente!");
//         }
//     }
// }

// function geraAleatorio(){
//     const vlMax = 100;
//     const vlMin = 1;
//     let aleatorio = Math.floor((Math.random() * (vlMax - vlMin + 1)) + vlMin);
//     return aleatorio;
// }