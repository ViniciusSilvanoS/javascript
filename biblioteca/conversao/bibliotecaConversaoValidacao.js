// Tira diferença de cases e acentos para comparar alguma pesquisa
function removeAcentoECase (text){       
    text = text.toUpperCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃÄ]','gi'), 'A');
    text = text.replace(new RegExp('[ÉÈÊË]','gi'), 'E');
    text = text.replace(new RegExp('[ÍÌÎÏ]','gi'), 'I');
    text = text.replace(new RegExp('[ÓÒÔÕÖ]','gi'), 'O');
    text = text.replace(new RegExp('[ÚÙÛÜ]','gi'), 'U');
    text = text.replace(new RegExp('[Ç]','gi'), 'C');
    return text;                 
}

// Pesquisa se o ano digitado é bissexto
function verificaBissexto (ano){
    let bissexto = false;
    if(ano % 400 == 0){
        bissexto = true;
    }else if(ano % 4 == 0 && ano % 100 != 0){
        bissexto = true;
    }
    return bissexto;
}

// Gera um número aleatório
function numAleatorio(){
    const vlMin = 1;
    const vlMax = 100;
    let aleatorio = Math.floor((Math.random() * (vlMax - vlMin + 1)) + vlMin);

    return aleatorio;
}

// Verifica se está vazio
function isVazio(valor){
    if(typeof valor === "undefined" || typeof valor === null || valor.length == 0){
        return true;
    }else{
        return false;
    }
}

// Verifica se passa o tamanho mínimo
function isVlMin(valor){
    const VLMIN = 4;

    if(typeof valor === "number"){
        valor = valor + "";
        valor = valor.replaceAll(".", "");
    }

    if(!(typeof valor === "undefined" || typeof valor === null || valor.length == 0)){
        if(valor.length >= VLMIN){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

}

// Verifica se não ultrapassa o tamanho máximo
function isVlMax(valor){
    const VLMAX = 10;

    if(typeof valor === "number"){
        valor = valor + "";
        valor = valor.replaceAll(".", "");
    }

    if(!(typeof valor === "undefined" || typeof valor === null || valor.length == 0)){
        if(valor.length <= VLMAX){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
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

// Verifica se é um número real
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
