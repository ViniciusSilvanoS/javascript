let vlCombustivel = validaValor("Digite o valor do combustível");

let vlAbastecer = validaValor("Digite o valor que deseja abastecer:");

alert("Você abasteceu " + (vlAbastecer / vlCombustivel).toFixed(3) + " litros.");


function validaValor (text){
    let valor;
    do{
        valor = Number(prompt(text));
        if(valor < 1 || Number.isNaN(valor)){
            alert("Valor inválido!");
        }
    }while(valor < 1 || Number.isNaN(valor));

    return valor;
}