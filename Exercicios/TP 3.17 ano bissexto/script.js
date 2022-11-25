/* Crie uma aplicação que solicite ao usuário um ano com 4 dígitos.

A aplicação deve informar para o usuário se aquele ano é bissexto ou não. */

let ano = insereAnoValido();

let mensagemBissexto = verificaBissexto(ano) ? "" : " não";

alert("O ano " + ano + mensagemBissexto + " é bissexto.");


function insereAnoValido(){
    let ano;
    while(true){
        ano = Number(prompt("Digite o ano que deseja saber se é bissexto: "));
        if(ano > 999 && ano <= 9999){
            break;
        }
    }
    return ano;
}

function verificaBissexto (ano){
    let bissexto = false;
    if(ano % 400 == 0){
        bissexto = true;
    }else if(ano % 4 == 0 && ano % 100 != 0){
        bissexto = true;
    }
    return bissexto;
}



