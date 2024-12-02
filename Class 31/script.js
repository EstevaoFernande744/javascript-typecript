const frutas = ['Maçã', 'Perâ', 'Uva', 'Banana', 'Cajú', 'Morango', 'Melão', 'Melancia', 'Carambola', 'Ciriguela', 'Goiaba', 'Manga', 'Limão', 'Laranja', 'Cereja', 'Cajá', 'Tamarindo', 'Amora', 'Kiwi'];



const pessoa = {
    nome: 'Estevão',
    sobrenome: 'Fernandes',
    idade: 26
};

console.log(pessoa.nome);
console.log(pessoa['nome']) 

for (let chave in pessoa){ // é as informações do objeto
    console.log(chave)  // singular por que vai me dando uma chave a cada interação
    console.log(chave, pessoa[chave]) // pega a chave, e o valor dentro da chave
}

/*
-------------For classico

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}



-------------For in

for (let indice in frutas){  // le os indices
    console.log(frutas[indice])
}


*/ 
