/*
Crie uma aplicação que apresente para o usuário, um passo a passo para fazer um café.

Dê a ele a opção para escolher de que passo do processo ele quer receber as instruções, por exemplo, supondo que haja 10 passos para o processo, que ele possa escolher ver apenas do passo informado em diante.

Considere que o café deverá ainda ser torrado e moído pela máquina de café.
*/

let escolha;

while(true){
    escolha = Number(prompt("Digite a partir de qual passo deseja ver o passo a passo: "))
    if(escolha >= 1 && escolha <= 10){
        break;
    }else{
        alert("Você digitou um valor inválido!");
    }
}

switch(escolha){
    case 1:
        alert("1: Torre o café");
    case 2:
        alert("2: Moa o café");
    case 3:
        alert("3: Coloque a aguá a esquentar");
    case 4:
        alert("4: Tire a água um pouco antes de ferver. Quando chegar a 94ºc");
    case 5:
        alert("5: Coloque o filtro no coador");
    case 6:
        alert("6: Coloque o café. 10g de café para 100ml de água");
    case 7:
        alert("Só aguardar e tomar!");
}