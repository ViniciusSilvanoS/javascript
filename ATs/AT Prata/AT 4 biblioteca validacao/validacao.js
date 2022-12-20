function isVazio(valor){
    if(typeof valor === "undefined" || typeof valor === null || valor.length == 0){
        return true;
    }else{
        return false;
    }
}

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

function isInteger(valor){
    if(Number.isInteger(valor)){
        return true;
    }else{
        return false;
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
