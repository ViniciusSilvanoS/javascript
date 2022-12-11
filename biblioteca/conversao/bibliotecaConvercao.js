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
