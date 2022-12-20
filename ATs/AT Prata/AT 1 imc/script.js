let altura = validaAltura();
let peso = validaPeso();
let imc = calcIMC(peso, altura);

// console.log("imc: " + imc);

let msgIMC;

if(imc < 18.5){
    msgIMC = "abaixo do peso normal";
}else if(imc >= 18.5 && imc < 25){
    msgIMC = "peso normal";
}else if(imc >= 25 && imc < 30){
    msgIMC = "excesso de peso";
}else if(imc >= 30 && imc < 35){
    msgIMC = "obesidade classe I";
}else if(imc >= 35 && imc < 40){
    msgIMC = "obesidade classe II";
}else if(imc >= 40){
    msgIMC = "obesidade classe III";
}

alert("Seu IMC é: " + imc.toFixed(1) + "\nClassificação: " + msgIMC[0].toUpperCase() + msgIMC.substring(1));

// --------------------------------------------------------------------

function validaAltura(){
    let altura;
    do{
        altura = Number(prompt("Digite sua altura"));
        if(altura < 0.30 || altura > 2.75 || Number.isNaN(altura)){
            alert("Valor inválido!");
        }
    }while(altura < 0.30 || altura > 2.75 || Number.isNaN(altura));
    
    return altura;
}

function validaPeso(){
    let peso;
    do{
        peso = Number(prompt("Digite seu peso:"));
        if(peso < 2.4 || peso > 300 || Number.isNaN(peso)){
            alert("Valor inválido!");
        }
    }while(peso < 2.4 || peso > 300 || Number.isNaN(peso));

    return peso;
}

function calcIMC(peso, altura){
    let imc = peso / Math.pow(altura, 2);

    return imc;
}