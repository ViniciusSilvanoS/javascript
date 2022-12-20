let num;

do{
    num = Number(prompt("Digite um número inteiro:"));
    if(!Number.isInteger(num)){
        alert("Valor inválido!!!");
    }
}while(!Number.isInteger(num));

if(num > 0){
    alert("O número digitado é positivo.");
}else if(num < 0){
    alert("O número digitado é negativo.");
}else{
    alert("O número digitado é zero.");
}