let idade = validaIdade();

if(idade < 16){
    alert("Você não pode votar!")
}else if((idade >= 16 && idade < 18) || idade > 70){
    alert("Você pode votar, porém não é obrigado!");
}else{
    alert("A sua votação é obrigatória!");
}

function validaIdade(){
    let idade;
    do{
        idade = Number(prompt("Digite sua idade:"));
        if(idade <= 0 || idade >= 110 || !Number.isInteger(idade)){
            alert("Valor inválido!");
        }
    }while(idade <= 0 || idade >= 110 || !Number.isInteger(idade));
    
    return idade;
}