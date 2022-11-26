/* No arquivo script.js há variáveis contento a agilidade de vários pilotos.

Complementando o código do arquivo citado, faça um programa que solicite do usuário, o nome de um piloto.

O programa deve:

Selecionar aleatoriamente outro piloto.
Comparar a agilidade do piloto escolhido pelo usuário e o piloto escolhido aleatoriamente.
Exibir no console, o nome dos pilotos comparados.
Exibir no console, a agilidade dos pilotos comparados.
Exibir no console, se o usuário ganhou, perdeu ou empatou a rodada. */

// Array de objetos piloto
let pilotos = [
    {
        nome: "Senna",
        velocidade: 200
    },
    {
        nome: "Hamilton",
        velocidade: 200
    },
    {
        nome: "Piquet",
        velocidade: 180
    },
    {
        nome: "Prost",
        velocidade: 150
    },
    {
        nome: "Russell",
        velocidade: 120
    }
]

// -----------------------------------------------------------------------------------------

let pilotoUsuario = procuraValidaPiloto(pilotos);
let pilotoMaquina = geraPiloto(pilotos, pilotoUsuario);

alert("Piloto escolhido: " + pilotoUsuario.nome + "\nVelocidade: " + pilotoUsuario.velocidade +
"\n\nPiloto oponente: " + pilotoMaquina.nome + "\nVelocidade: " + pilotoMaquina.velocidade);

pilotoVencedor(pilotoUsuario, pilotoMaquina);


// -----------------------------------------------------------------------------------------

// Imprime pilotos
function nomePilotos(pilotos){
    let todosPilotos = "";
    pilotos.forEach(piloto => {
        todosPilotos += "* " + piloto.nome + "\n";
    });
    return todosPilotos;
}

// Procura nome digitado com nomes do array
function procuraValidaPiloto(pilotos){
    let nome;
    let procura = false;
    let objPiloto;
    do{
        nome = prompt("Digite o nome do piloto desejado: \n" + nomePilotos(pilotos));
        pilotos.forEach(piloto => {
            if(removeAcentoECase(nome) === removeAcentoECase(piloto.nome)){
                procura = true;
                objPiloto = piloto; // tenho que pegar o indice do piloto aqui
            }
        });
        if(procura == false){
            alert("Piloto não encontrado!");
        }
    }while(procura == false);
    return objPiloto;
}

// Gera um piloto oponente diferente do escolhido pelo usuário
function geraPiloto(pilotos, pilotoUsuario){

    let vlMax = pilotos.length - 1;

    let aleatorio;
    while(true){
        aleatorio = Math.floor(Math.random() * vlMax + 1);
        if(pilotos[aleatorio].nome == pilotoUsuario.nome){
            continue;
        }

        return pilotos[aleatorio];

    }
}

// Compara e imprime piloto vencedor
function pilotoVencedor(pilotoUsuario, pilotoMaquina){
    if(pilotoUsuario.velocidade > pilotoMaquina.velocidade){
        alert("Parabéns " + pilotoUsuario.nome + ", você venceu!!!");
    }else if(pilotoMaquina.velocidade > pilotoUsuario.velocidade){
        alert("Você perdeu! " + pilotoMaquina.nome +" venceu.");
    }else{
        alert("Houve um empate!");
    }
}

// Tira diferenças de case e acentos
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