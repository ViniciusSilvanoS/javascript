console.log("1998: " + verificaBissexto(1998));
console.log("2000: " + verificaBissexto(2000));
console.log("2020: " + verificaBissexto(2020));
console.log("2022: " + verificaBissexto(2022));

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