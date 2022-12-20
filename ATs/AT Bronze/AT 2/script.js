/*
Crie um programa que pergunte o nome do usuário, atribua a uma variável, valide se foi digitado algo e exiba uma mensagem apropriada: uma saudação se foi validado com sucesso ou uma mensagem de erro, caso contrário.

A validação é bem simples: verifique apenas se algo foi digitado.

Ex: "Bem Vindo, Machado de Assis" ou "Erro: digite um nome".
*/
let nome = validaNome();

alert(nome);



function validaNome(){
    let nome;
    nome = prompt("Digite seu nome: ");
    if(nome == ""){
        return "Nome inválido"
    }else{
        nome = ajustaCase(nome);
        return "Saudações " + nome;
    }
}

function ajustaCase(nome){
    nome = nome[0].toUpperCase() + nome.substring(1).toLowerCase();
    return nome;
}