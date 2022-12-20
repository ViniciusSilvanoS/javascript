/* Criar um programa que obtenha dois números inteiros diferentes, valide se a entrada está correta e informe qual dos dois é o maior. */

let num1 = validaInteiro("1");
let num2 = validaInteiro("2");
comparaNum(num1, num2);



function validaInteiro(text){
    let num;
    do{
        num = Number(prompt("Digite o " + text + "º número:"));
        if(!Number.isInteger(num)){
            alert("Valor inválido");
        }
    }while(!Number.isInteger(num) && num != null);

    return num;
}

function comparaNum (num1, num2){
    if(num1 > num2){
        alert("1º: " + num1 + " | 2º: " + num2 + "\nO primeiro é maior.");
    }else if(num1 < num2){
        alert("1º: " + num1 + " | 2º: " + num2 + "\nO segundo é maior.");
    }else{
        alert("1º: " + num1 + " | 2º: " + num2 + "\nOs dois são iguais.");
    }
}