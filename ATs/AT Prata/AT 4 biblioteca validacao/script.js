let v1;
let v2 = "";
let v3 = 0;
let v4 = 5;
let v5 = 2.3;
let v6 = "abcd123";
let v7 = 2458.25;
let v8 = "Felipe Massa";
// let v9 = null;

let valor = [v1, v2, v3, v4, v5, v6, v7, v8];

escreve(valor);

function escreve(valores){
    valores.forEach(valor => {
        console.log("Valor: " + valor + "\nEstá vazio: " + isVazio(valor) + "\nSe enquadra no valor mínimo: " + isVlMin(valor) + 
        "\nSe enquadra no valor máximo: " + isVlMax(valor) + "\nSe enquadra no valor máximo e mínimo: " + (isVlMin(valor) && isVlMax(valor)) +
        "\nÉ inteiro: " + isInteger(valor) + "\nÉ um número real: " + isReal(valor));
        console.log("\n---------\n")
    });

}