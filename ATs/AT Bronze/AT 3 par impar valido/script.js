let num;
do{
    num = Number(prompt("Digite um número natural"));
    if(num <= 0 || !Number.isInteger(num)){
        alert("Valor inválido!!!");
    }
}while(num <= 0 || !Number.isInteger(num));

num % 2 == 0 ? alert("O número digitado é par!") : alert("O número digitado é ímpar!");