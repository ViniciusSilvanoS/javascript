function calcularIMC(){
    let num_altura = Number(document.getElementById("num_altura").value);
    console.log("num_altura", num_altura);
    let num_peso = Number(document.getElementById("num_peso").value);
    console.log("num_peso", num_peso);

    let msg_altura = document.getElementById("msg_altura");
    msg_altura.innerHTML = "";
    if(num_altura == 0){
        msg_altura.innerHTML = "<br>Digite a altura.";
    }else if(!(isAltura(num_altura))){
        msg_altura.innerHTML = "<br>Altura incorreta.";
    }

    let msg_peso = document.getElementById("msg_peso");
    msg_peso.innerHTML = "";
    if(num_peso == 0){
        msg_peso.innerHTML = "<br>Digite o peso.";
    }else if(!(isPeso(num_peso))){
        msg_peso.innerHTML = "<br>Peso incorreto.";
    }

    let imc = calcIMC(num_peso, num_altura);

    let resp_imc = document.getElementById("resp_imc");
    resp_imc.innerHTML = "";
    if(isAltura(num_altura) && isPeso(num_peso)){
        resp_imc.innerHTML = grauIMC(imc);
    }





    // ------------------------------------------------------------------

    function isAltura(altura){
        let result;
        if(!(altura < 0.30 || altura > 2.75 || Number.isNaN(altura))){
            result = true;
        }else{
            result = false;
        }
        
        return result;
    }
    
    function isPeso(peso){
        let result;
        if(!(peso < 2.4 || peso > 300 || Number.isNaN(peso))){
            result = true;
        }else{
            result = false;
        }
    
        return result;
    }
    
    function calcIMC(peso, altura){
        let imc = peso / Math.pow(altura, 2);
    
        return imc;
    }

    function grauIMC(imc){
        let msg;
        if(imc < 18.5){
            msg = "Magreza";
        }else if(imc >= 18.5 && imc < 25){
            msg = "Peso normal";
        }else if(imc >= 25 && imc < 30){
            msg = "Excesso de peso";
        }else if(imc >= 30 && imc < 35){
            msg = "Obesidade classe I";
        }else if(imc >= 35 && imc < 40){
            msg = "Obesidade classe II";
        }else if(imc >= 40){
            msg = "Obesidade classe III";
        }else{
            msg = "ERRO NO CÁLCULO";
        }

        return msg;
    }
}


