function calculaOrcamento(){
    let renda_mensal = Number(document.getElementById("renda_mensal").value);
    let gasto_moradia = Number(document.getElementById("gasto_moradia").value);
    let gasto_educacao = Number(document.getElementById("gasto_educação").value);
    let gasto_transporte = Number(document.getElementById("gasto_transporte").value);


    let previsto_moradia = (renda_mensal * 0.3).toFixed(2);
    let previsto_educacao = (renda_mensal * 0.2).toFixed(2);
    let previsto_transporte = (renda_mensal * 0.15).toFixed(2);

    let ajusta_bloco;
    if(renda_mensal > 1400){
        ajusta_bloco = 4;
    }else{
        ajusta_bloco = 0.75;
    }

    // Verifica as inserções
    let msg = document.getElementById("msg");
    msg.innerHTML = "";
    if(renda_mensal === 0 && gasto_moradia === 0 && gasto_educacao === 0 && gasto_transporte === 0){
        msg.innerHTML = "<br>Nenhum valor foi inserido";
    }else if((gasto_moradia + gasto_educacao + gasto_transporte) > renda_mensal){
    msg.innerHTML = "<br><strong>Valores digitados inválidos</strong>";
    msg.style.color = "red";
    }else{
        if(renda_mensal === 0){
            msg.innerHTML += "<br><u>Renda mensal</u> não foi inserida";
        }
        if(gasto_moradia === 0){
            msg.innerHTML += "<br>Gasto com <u>moradia</u> não foi inserido";
        }
        if(gasto_educacao === 0){
            msg.innerHTML += "<br>Gasto com <u>educação</u> não foi inserido";
        }
        if(gasto_transporte === 0){
            msg.innerHTML += "<br>Gasto com <u>transporte</u> não foi inserido";
        }
    }

    // Porcentagem de cada gasto
    let porcent_moradia = document.getElementById("porcent_moradia");
    let porcent_educacao = document.getElementById("porcent_educacao");
    let porcent_transporte = document.getElementById("porcent_transporte");
    
    porcent_moradia.innerHTML = "";
    porcent_educacao.innerHTML = "";
    porcent_transporte.innerHTML = "";
    if(gasto_moradia > 0 && renda_mensal > 0 && (gasto_moradia + gasto_educacao + gasto_transporte) <= renda_mensal){
        let porcent = gasto_moradia * 100 / renda_mensal;

        porcent_moradia.innerHTML = porcent.toFixed(1) + "%";
    }
    if(gasto_educacao > 0 && renda_mensal > 0 && (gasto_moradia + gasto_educacao + gasto_transporte) <= renda_mensal){
        let porcent = gasto_educacao * 100 / renda_mensal;

        porcent_educacao.innerHTML = porcent.toFixed(1) + "%";
    }
    if(gasto_transporte > 0 && renda_mensal > 0 && (gasto_moradia + gasto_educacao + gasto_transporte) <= renda_mensal){
        let porcent = gasto_transporte * 100 / renda_mensal;

        porcent_transporte.innerHTML = porcent.toFixed(1) + "%";
    }

    // Organiza gráfico de gastos
    if((gasto_moradia + gasto_educacao + gasto_transporte) <= renda_mensal && renda_mensal !== 0){

        let planejado_moradia = document.getElementById("planejado_moradia");
        planejado_moradia.style.width = (previsto_moradia / ajusta_bloco) + "px";
        planejado_moradia.style.background = "blue";
        planejado_moradia.getElementsByTagName("p")[0].innerHTML = previsto_moradia;

        let realizado_moradia = document.getElementById("realizado_moradia");
        realizado_moradia.style.width = (gasto_moradia / ajusta_bloco) + "px";
        if(gasto_moradia < previsto_moradia){
            realizado_moradia.style.background = "green";
        }else if (gasto_moradia == previsto_moradia){
            realizado_moradia.style.background = "blue";
        }else{
            realizado_moradia.style.background = "red";
        }
        realizado_moradia.getElementsByTagName("p")[0].innerHTML = gasto_moradia.toFixed(2);


        let planejado_educacao = document.getElementById("planejado_educacao");
        planejado_educacao.style.width = (previsto_educacao / ajusta_bloco) + "px";
        planejado_educacao.style.background = "blue";
        planejado_educacao.getElementsByTagName("p")[0].innerHTML = previsto_educacao;

        let realizado_educacao = document.getElementById("realizado_educacao");
        realizado_educacao.style.width = (gasto_educacao / ajusta_bloco) + "px";
        if(gasto_educacao < previsto_educacao){
            realizado_educacao.style.background = "green";
        }else if (gasto_educacao == previsto_educacao){
            realizado_educacao.style.background = "blue";
        }else{
            realizado_educacao.style.background = "red";
        }
        realizado_educacao.getElementsByTagName("p")[0].innerHTML = gasto_educacao.toFixed(2);


        let planejado_transporte = document.getElementById("planejado_transporte");
        planejado_transporte.style.width = (previsto_transporte / ajusta_bloco) + "px";
        planejado_transporte.style.background = "blue";
        planejado_transporte.getElementsByTagName("p")[0].innerHTML = previsto_transporte;

        let realizado_transporte = document.getElementById("realizado_transporte");
        realizado_transporte.style.width = (gasto_transporte / ajusta_bloco) + "px";
        if(gasto_transporte < previsto_transporte){
            realizado_transporte.style.background = "green";
        }else if (gasto_transporte == previsto_transporte){
            realizado_transporte.style.background = "blue";
        }else{
            realizado_transporte.style.background = "red";
        }
        realizado_transporte.getElementsByTagName("p")[0].innerHTML = gasto_transporte.toFixed(2);


        
    }




}