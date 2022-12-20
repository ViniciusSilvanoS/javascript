let categoria = carteiraMot();
console.log("categoria: " + categoria)
descricaoCategoria(categoria);

function carteiraMot(){
    let categoria;
    do{
        categoria = prompt("Digite a categoria da sua carteira:\nA B C D E");
        if(removeAcentoECase(categoria).charCodeAt() < 65 || removeAcentoECase(categoria).charCodeAt() > 69){
            alert("Valor inválido!");
        }
    }while(removeAcentoECase(categoria).charCodeAt() < 65 || removeAcentoECase(categoria).charCodeAt() > 69);

    return removeAcentoECase(categoria);
}

function descricaoCategoria(categoria){
    switch(categoria){
        case "A":
            alert("A - Motos e triciclos");
            break;
        case "B":
            alert("B - Carros de passeio");
            break;
        case "C":
            alert("C - Veículos de carga acima de 3,5 toneladas");
            break;
        case "D":
            alert("D - Veículos com mais de 8 passageiros");
            break;
        case "E":
            alert("E - Veículos com unidade acoplada acima de 6 toneladas");
            break;
    }
}

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