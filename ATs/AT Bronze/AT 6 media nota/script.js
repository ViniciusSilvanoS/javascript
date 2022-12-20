/*
Crie um programa que receba na entrada o valor de três notas de um aluno
O valor entre 0 e 10
Informe a média entre elas.
*/

let nt1, nt2, nt3;
nt1 = validaNota("1");
nt2 = validaNota("2");
nt3 = validaNota("3");

alert("A média é: " + ((nt1 + nt2 + nt3) / 3));
function validaNota(text){
    let nota;
    do{
        nota = Number(prompt("Digite a nota do " + text + "º aluno: "));
        if(nota > 10 || nota < 0){
            alert("Valor inválido!");
        }
    }while(nota > 10 || nota < 0);

    return nota;
}

