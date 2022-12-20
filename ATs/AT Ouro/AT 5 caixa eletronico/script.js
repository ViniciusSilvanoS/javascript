function sacar(){
    let valor = Number(document.getElementById("valor").value);

    let msg_saque = document.getElementById("msg_saque");
    msg_saque.innerHTML = "";

    let msg_100 = document.getElementById("msg_100");
    let msg_50 = document.getElementById("msg_50");
    let msg_20 = document.getElementById("msg_20");
    let msg_10 = document.getElementById("msg_10");
    msg_100.innerHTML = "";
    msg_50.innerHTML = "";
    msg_20.innerHTML = "";
    msg_10.innerHTML = "";
    if(isReal(valor) && (valor % 10 == 0)){
        let qtd100 = Math.floor(valor / 100);
        let auxiliar = valor % 100;
    
        let qtd50 = Math.floor(auxiliar / 50);
        auxiliar = auxiliar % 50;
    
        let qtd20 = Math.floor(auxiliar / 20);
        auxiliar = auxiliar % 20;
    
        let qtd10 = auxiliar / 10;

        if(qtd100 > 0){
            msg_100.innerHTML = qtd100;
        }
        if(qtd50 > 0){
            msg_50.innerHTML = qtd50;
        }
        if(qtd20 > 0){
            msg_20.innerHTML = qtd20;
        }
        if(qtd10 > 0){
            msg_10.innerHTML = qtd10;
        }
    }else if((valor % 10 != 0) && isReal(valor)){
        msg_saque.innerHTML = "Valor deve ser multiplo de 10.<br>(Terminar com 0)";
    }else{
        msg_saque.innerHTML = "Valor inválido";
    }


}

function isReal(valor){
    if(valor !== ""){
        if(valor > 0 || valor < 0 || valor === 0){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

}