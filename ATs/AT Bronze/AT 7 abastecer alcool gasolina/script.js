let vlAbastecer = validaValor("Digite o valor que deseja abastecer:");

let vlAlcool = validaValor("Digite o valor do álcool:");
let vlGasolina = validaValor("Digite o valor da gasolina:");

let vlMenor = vlAlcool / vlGasolina;

if(vlMenor < 0.7){
    alert("Use álcool!\nVocê abasteceu " + (vlAbastecer / vlAlcool).toFixed(2) + " litros");
}else{
    alert("Use gasolina!\nVocê abasteceu " + (vlAbastecer / vlGasolina).toFixed(2) + " litros");
}


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