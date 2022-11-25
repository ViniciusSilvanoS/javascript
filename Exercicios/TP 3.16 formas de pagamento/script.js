/* 
Crie uma aplicação que solicite ao usuário o valor total de uma compra e a forma de pagamento. Considere as seguintes condições:

* Pagamento à vista, no dinheiro: desconto de 10%;
* Pagamento à vista, no débito: desconto de 08%;
* Pagamento à vista, no crédito: desconto de 05%;
* Pagamento a prazo, até 3x, no débito: sem desconto, informar valor das parcelas;
* Pagamento a prazo, acima de 3x, no débito: acréscimo de 4%, informar valor das parcelas; 
*/

// Verifica valor da compra
let totalCompra;
while(true){
    totalCompra = Number(prompt("Digite o valor total da compra"));
    if(totalCompra > 0 && !Number.isNaN(totalCompra)){
        break;
    }else{
        alert("Valor inválido!");
    }
}

// Verifica forma de pagamento
let formaPagamento
while(true){
    formaPagamento = Number(prompt("Digite a forma de pagamento: \n1: À vista no dinheiro\n2: Débito\n3: Crédito à vista\n4: Crédito parcelado"));
    if(formaPagamento >= 1 && formaPagamento <= 4){
        break;
    }else{
        alert("Valor inválido!");
    }
}

// Valida quantidade de parcelas. E se não teve incongruência em colocar só 1 como quantidade de parcelas
let qtdParcela;
if(formaPagamento === 4){
    let confirma;
    while(true){
        qtdParcela = Number(prompt("Escolha a quantidade de parcelas. (Máximo 12) "));
        if(qtdParcela > 1 && qtdParcela <= 12){
            break;
        }else if(qtdParcela == 1){
            confirma = Number(prompt("Então você deseja comprar no crédito à vista?\nDigite: \n1 para SIM\n(Outra tecla) para NÃO"));
            if(confirma == 1){
                formaPagamento = 3;
                break;
            }else{
                continue;
            }
        }
    }
}

// Calcula descontos
let parcela;
switch(formaPagamento){
    case 1: // a vista dinheiro
        totalCompra *= 0.9;
        break;
    case 2: // a vista débito
        totalCompra *= 0.92;
        break;
    case 3: // a vista credito
        totalCompra *= 0.95;
        break;
    case 4: 
        if(qtdParcela <= 3){ // até 3x parcelado
            parcela = totalCompra / qtdParcela;
            break;
        }else{ // acima de 3x parcelado
            totalCompra *= 1.04;
            parcela = totalCompra / qtdParcela;
            break;
        }
}

alert("Valor total da compra: " + totalCompra);

if(formaPagamento === 4){
    alert(qtdParcela + " parcelas de R$" + parcela.toFixed(2));
}