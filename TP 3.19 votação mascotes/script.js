/* Um time de e-sports tem duas opções para mascote, o RoboRat e o SuperKeyboard. Crie uma aplicação que solicite ao usuário a quantidade de votos recebida por cada mascote, mais a quantidade de votos inválidos.

A aplicação deve informar a porcentagem de votos de cada mascote e a porcentagem de votos inválidos.

Informar também a porcentagem de votos de cada mascote, considerando apenas os votos válidos.

Por fim, a aplicação deve informar qual será o novo mascote do time. */

alert("Início de votação para os mascotes: RoboRat e SuperKeyboard");

let votoRat = 0;
let votoKeyboard = 0;
let votoInvalido = 0;

// Escolhe modo de inserir dados
let escolha;
while(true){
    escolha = Number(prompt("A votação já foi realizada?\n\nDigite:\n(1) para inserir votos previamente feitos\n(2) para executar a votação agora"));
    if(escolha === 1 || escolha === 2){
        break;
    }else{
        alert("Opção inválida. Digite novamente!");
    }

}

// Direciona modo de inserir dados
if(escolha === 1){ // Insere os votos completos
    votoRat = validaNumIntPositivo("Votos para o RoboRat: ");
    votoKeyboard = validaNumIntPositivo("Votos para o SuperKeyboar: ");
    votoInvalido = validaNumIntPositivo("Votos para o inválidos: ");
}else{ // Realiza contagem de votos
    let votacao;
    votacao = Number(prompt("Digite para votar:\n(1) RoboRat\n(2) SuperKeyboard\n(0) Encerrar votação"));
    while(true){
        if(votacao == 1){
            votoRat++;
        }else if(votacao == 2){
            votoKeyboard++;
        }else if(votacao == 0){
            break;
        }else{
            votoInvalido++;
        }
        votacao = Number(prompt("Digite para votar:\n(1) RoboRat " + votoRat + "\n(2) SuperKeyboard " + votoKeyboard + "\n(0) Encerrar votação\n\nVotos inválidos " + votoInvalido));
    }
}

// Calcula porcentagens
let totalVotos = votoRat + votoKeyboard + votoInvalido;
let porcentRat = (votoRat * 100) / totalVotos;
let porcentKey = (votoKeyboard * 100) / totalVotos;
let porcentInvalidos = (votoInvalido* 100) / totalVotos;

let totalVotosValidos = votoRat + votoKeyboard;
let porcentRatValidos = (votoRat * 100) / totalVotosValidos;
let porcentKeyValidos = (votoKeyboard * 100) / totalVotosValidos;


// Imprime porcentagens
alert("Porecentagem geral\n\nPorcentagem RoboRat: " + porcentRat.toFixed(1) + "%\nPorcentagem SuperKeyboard: " + porcentKey.toFixed(1) + "%\nPorcentagem votos inválidos: " + porcentInvalidos.toFixed(1) + "%" + 
"\n\n---------------------------------------------------\n\n" + 
"Porcentagem de votos válidos\n\nPorcentagem RoboRat: " + porcentRatValidos.toFixed(1) + "%\nPorcentagem SuperKeyboard: " + porcentKeyValidos.toFixed(1) + "%");

// Imprime vencedor
if(porcentRatValidos > porcentKeyValidos){
    alert("O vencedor foi:\n----- RoboRat -----");
}else if(porcentRatValidos < porcentKeyValidos){
    alert("O vencedor foi:\n----- SuperKeyboard -----");
}else{
    alert("Houve um empate!!!");
}

function validaNumIntPositivo(texto){
    let num;
    while(true){
        num = Number(prompt(texto));
        if(num >= 0){
            break;
        }
    }
    return num;
}