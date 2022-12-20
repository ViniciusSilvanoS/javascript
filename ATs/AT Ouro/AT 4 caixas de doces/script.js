// let num = isInteger(Number(prompt("Digite a quantidade de doc")))
function calcularCaixas(){
    const CXGRANDE = 500;
    const CXMEDIA = 100;
    const CXPEQUENA = 40;
    const CXMENOR = 10;

    let num_doces = Number(document.getElementById("num_doces").value);


    let msg_cxgrande = document.getElementById("msg_cxgrande");
    msg_cxgrande.innerHTML = "0";

    let msg_cxmedia = document.getElementById("msg_cxmedia");
    msg_cxmedia.innerHTML = "0";

    let msg_cxpequena = document.getElementById("msg_cxpequena");
    msg_cxpequena.innerHTML = "0";

    let msg_cxmenor = document.getElementById("msg_cxmenor");
    msg_cxmenor.innerHTML = "0";

    let msg_cxtotal = document.getElementById("msg_cxtotal");
    msg_cxtotal.innerHTML = "0";


    let msg_doces = document.getElementById("msg_doces");
    msg_doces.innerHTML = "";
    if(!(isInteger(num_doces)) && num_doces > 0){
        msg_doces.innerHTML = "Digite um valor válido!";
    }else{
        if(num_doces < 300 && num_doces != 0){
            msg_doces.innerHTML = "Pedido mínimo de 300 ítens.";
        }else{
            if(!(isDiv10(num_doces))){
                msg_doces.innerHTML = "Pedido deve ser multiplo de 10.<br>(Terminar com 0)";
            }else{
                let totalDoces = num_doces;
                let qtdGrande, qtdMedia, qtdPequena, qtdMenor;

                qtdGrande = Math.floor((totalDoces / CXGRANDE));
                totalDoces = totalDoces % CXGRANDE;

                qtdMedia = Math.floor((totalDoces / CXMEDIA));
                totalDoces = totalDoces % CXMEDIA;

                qtdPequena = Math.floor((totalDoces / CXPEQUENA));
                qtdMenor = (totalDoces % CXPEQUENA) / CXMENOR;
                

                if(qtdGrande > 0){
                    msg_cxgrande.innerHTML = qtdGrande;
                }

                if(qtdMedia > 0){
                    msg_cxmedia.innerHTML = qtdMedia;
                }

                if(qtdPequena > 0){
                    msg_cxpequena.innerHTML = qtdPequena;
                }

                if(qtdMenor > 0){
                    msg_cxmenor.innerHTML = qtdMenor;
                }

                let totalCX = qtdGrande + qtdMedia + qtdPequena + qtdMenor;
                if(totalCX > 0){
                    msg_cxtotal.innerHTML = totalCX;
                }
            }
        }
    }
}

// Verifica se é um número inteiro
function isInteger(valor){
    if(Number.isInteger(valor)){
        return true;
    }else{
        return false;
    }
}

// Verifica se o número é divisivel por 10
function isDiv10(num){
    if(num % 10 == 0){
        return true;
    }else{
        return false;
    }
}