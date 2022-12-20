const GORJETA = 1.1;
let vlConta = validaValor();
let qtdPessoas = validaPessoa();

let vlTotal = vlConta * GORJETA;
let vlPorPessoa = vlTotal / qtdPessoas;

alert("O valor total da conta é: R$" + vlTotal.toFixed(2) + "\nO valor por pessoa é de: R$" + vlPorPessoa.toFixed(2));

// -------------------------------------------------------------------

function validaValor(){
    let valor;
    do{
        valor = Number(prompt("Digite o valor da conta:"));
        if(valor <= 0 || Number.isNaN(valor)){
            alert("Valor inválido!");
        }
    }while(valor <= 0 || Number.isNaN(valor));

    return valor;
}

function validaPessoa(){
    let qtd;
    do{
        qtd = Number(prompt("Digite a quantidade de pessoas na mesa:"));
        if(qtd < 1 || !Number.isInteger(qtd)){
            alert("Valor inválido!");
        }
    }while(qtd < 1 || !Number.isInteger(qtd));

    return qtd;
}