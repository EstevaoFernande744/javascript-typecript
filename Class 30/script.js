/* for(variavel de controle; condição; incremento){

}

*/

console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')


for(let i = 50; i >= 0; i--){  // condição sempre true not false
    console.log(`linha ${i}`)
}
    
/*
i = 5000 == 5000 >= 0 ?  true
i = i - 1
*/

for(let i = 0; i <= 10; i++){
    const parOrImpar = i % 2 === 0 ? `O valor ${i} é par` : `O valor ${i} é impar!` 
    console.log(parOrImpar)
}

let carteiraEduardo = {
    nome: 'Eduardo',
    sobrenome: 'Brasil',
    idade: 20
};

let carteiraEstevao = {
    nome: 'Estevão',
    sobrenome: 'Fernandes',
    idade: 26
};

let carteiras = {

    '017.633.314-23': {nome: 'Estevão',
    sobrenome: 'Fernandes',
    idade: 26
    },
    eduardo: {
    nome: 'Eduardo',
    sobrenome: 'Brasil',
    idade: 20
    }

}




let vetorEduardo = ['Eduardo', 'Brasil', 20];

console.log(vetorEduardo);


const frutas = ['Maçã', 'Perâ', 'Uva', 'Banana', 'Cajú', 'Morango', 'Melão', 'Melancia', 'Carambola', 'Ciriguela', 'Goiaba', 'Manga', 'Limão', 'Laranja', 'Cereja', 'Cajá', 'Tamarindo', 'Amora', 'Kiwi'];

console.log(frutas.length);


// For classico do JavaScript

for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i} =`, frutas[i])
}