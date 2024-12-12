// Object map()

const pessoas = [
    {id: 3, nome: 'Estevão'},
    {id: 2, nome: 'Jordanna'},
    {id: 1, nome: 'Lua'},
];


/*
const novasPessoas = {}; // cria um elemento vazio para armazenar
for (const { id, nome } of pessoas) { // faz uma varredura e uma reconfiguração das caves
    novasPessoas[id] = { id, nome } // transforma o id em uma chave com os valores id e nome
}

console.log(novasPessoas)

*/

const novasPessoas = new Map(); // cria um map
for (const pessoa of pessoas) { /* O for...of percorre cada elemento do array pessoas. Cada elemento do array (que é um objeto { id, nome }) é atribuído à variável pessoa durante cada iteração.*/
    const { id } = pessoa; // Aqui, usamos a desestruturação para extrair a propriedade id do objeto pessoa.
    novasPessoas.set(id,  { ...pessoa }); 
}

console.log(novasPessoas)
console.log(novasPessoas.get(2)) // mostra a chave da pessoa 2 

for (const [identifier, { id, nome }] of novasPessoas){ // destructurin array
    console.log(identifier, id, nome)
    console.log(pessoas)
}