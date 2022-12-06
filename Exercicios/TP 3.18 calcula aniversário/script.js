/*

 * Crie uma aplicação que solicite ao usuário o dia e o mês de seu aniversário.
 * O programa deve informar para o usuário quantos dias faltam para o seu aniversário ou quantos dias já se passaram, caso já tenha passado
  
*/

// -----------------------------------------------------------------------------------------

const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = (hoje.getMonth() + 1);
const anoAtual = hoje.getFullYear();
console.log(diaAtual + " / " + mesAtual + " / " + anoAtual);

let vetorDiaMes = validaDiaMes(anoAtual);
let diaAniver = vetorDiaMes[0];
let mesAniver = vetorDiaMes[1];

diferencaDiaMes(diaAtual, mesAtual, diaAniver, mesAniver, anoAtual);


// -----------------------------------------------------------------------------------------


// Calcula diferença de dias entre o aniversário e a data atual
function diferencaDiaMes(diaAtual, mesAtual, diaAniver, mesAniver, ano){
    let total;
    if(mesAniver == mesAtual){
        if(diaAniver > diaAtual){
            total = diaAniver - diaAtual;
        }else if(diaAniver == diaAtual){
            total = 0;
        }else{
            total = diaAtual - diaAniver;
            total *= -1; // Quando o total é negativo: o aniversário já passou -x dias
        }
        if(total > 0){
            total--; // Coloquei (total - 1) para desconsiderar o dia atual
            if(total == 0){
                alert("Amanhã será seu aniversário.");
            }else if(total == 1){
                alert("Falta " + total + " dia para seu aniversário."); 
            }else{
                alert("Faltam " + total + " dias para seu aniversário."); 
            }
        }else if(total < 0){
            total *= -1;
            if(total != 1){
                alert("Foi a " + total + " dias atrás seu aniversário.");
            }else{
                alert("Seu aniversário foi ontem.");
            }
        }else{
            alert("Hoje é o dia do seu aniversário... \nParabéns!!!")
        }
    }else if(mesAniver > mesAtual){ // Aniversário ainda não chegou
        total = contaDiasFaltantes(diaAniver, diaAtual, mesAniver, mesAtual, ano, 1);
        alert("Faltam " + (total - 1) + " dias para seu aniversário."); // (total - 1) para não contar também o dia do aniversário

    }else if(mesAniver < mesAtual){ // Aniversário já passou
        total = contaDiasPassados(diaAniver, diaAtual, mesAniver, mesAtual, ano, -1);
        alert("Faz " + total + " dias que você fez aniversário.");
    }

    // Pessoa que ainda não fez aniversário neste ano e não faz aniversário este mes
    function contaDiasFaltantes(diaAniver, diaAtual, mesAniver, mesAtual, ano){ // Calcula dias faltantes para chegar o aniversário
        let total = 0;
        let mesAniverAux = mesAniver;
        do{
            total += qtdDiasNoMes(mesAniverAux, ano);

            // Corrige os dias quebrados
            if(mesAniverAux == mesAniver){
                total -= qtdDiasNoMes(mesAniverAux, ano);
                total += diaAniver;
            }
            if(mesAniverAux == mesAtual){
                total -= qtdDiasNoMes(mesAtual, ano);
                total += (qtdDiasNoMes(mesAtual, ano) - diaAtual);
            }

            mesAniverAux--;
        }while(mesAniverAux >= mesAtual);

        return total;
    }

    // Pessoa que já fez aniversário
    function contaDiasPassados(diaAniver, diaAtual, mesAniver, mesAtual, ano){
        let total = 0;
        let mesAniverAux = mesAniver;
        do{
            total += qtdDiasNoMes(mesAniverAux, ano);

            // Corrige os dias quebrados
            if(mesAniverAux == mesAniver){
                total -= qtdDiasNoMes(mesAniverAux, ano);
                total += (qtdDiasNoMes(mesAniverAux, ano) - diaAniver);
            }
            if(mesAniverAux == mesAtual){
                total -= qtdDiasNoMes(mesAniverAux, ano);
                total += diaAtual;
            }

            mesAniverAux++;
        }while(mesAniverAux <= mesAtual);

        return total;
    }

    // Retorna quantidade de dias que tem o mes desejado
    function qtdDiasNoMes(mes, ano){
        let dias;
        switch(mes){
            case 1:
                dias = 31;
                break;
            case 2:
                let resultBissexto = verificaBissexto(ano);
                console.log("resultBissexto" + resultBissexto);
                if(resultBissexto){
                    dias = 29;
                }else{
                    dias = 28;
                }
                break;
            case 3:
                dias = 31;
                break;
            case 4:
                dias = 30;
                break;
            case 5:
                dias = 31;
                break;
            case 6:
                dias = 30;
                break;
            case 7:
                dias = 31;
                break;
            case 8:
                dias = 31;
                break;
            case 9:
                dias = 30;
                break;
            case 10:
                dias = 31;
                break;
            case 11:
                dias = 30;
                break;
            case 12:
                dias = 31;
                break;
        }

        return dias;
    }

}

// Valida e insere dia e mês
function validaDiaMes(ano){
    let mesAniver;
    let diaAniver;
    do{
        mesAniver = Number(prompt("Digite o mês do seu aniversário:"));
        switch(mesAniver){
            case 1:
                diaAniver = validaDia(31);
                break;
            case 2:
                let resultBissexto = verificaBissexto(ano);
                console.log("resultBissexto" + resultBissexto);
                if(resultBissexto){
                    diaAniver = validaDia(29);
                }else{
                    diaAniver = validaDia(28);
                }
                break;
            case 3:
                diaAniver = validaDia(31);
                break;
            case 4:
                diaAniver = validaDia(30);
                break;
            case 5:
                diaAniver = validaDia(31);
                break;
            case 6:
                diaAniver = validaDia(30);
                break;
            case 7:
                diaAniver = validaDia(31);
                break;
            case 8:
                diaAniver = validaDia(31);
                break;
            case 9:
                diaAniver = validaDia(30);
                break;
            case 10:
                diaAniver = validaDia(31);
                break;
            case 11:
                diaAniver = validaDia(30);
                break;
            case 12:
                diaAniver = validaDia(31);
                break;
            default:
                alert("Valor inválido. Digite novamente!")
        }
    }while(mesAniver < 1 || mesAniver > 12);
    let vetor = [diaAniver, mesAniver];
    return vetor;



    // Verifica se é um dia válido correlação ao determinado mês
    function validaDia(diasMes){
        let diaAniver;
        do{
            diaAniver = Number(prompt("Digite o dia do seu aniversário:"));
        }while(diaAniver > diasMes);
        return diaAniver;
    }
}

// Verifica se o ano é bissexto ou não
function verificaBissexto (ano){
    let bissexto = false;
    if(ano % 400 == 0){
        bissexto = true;
    }else if(ano % 4 == 0 && ano % 100 != 0){
        bissexto = true;
    }
    return bissexto;
}