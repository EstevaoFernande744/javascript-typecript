let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const numeros =  [b, c, a]; // atribuição via desestruturação
[a, b, c] = numeros; 

console.log(a, b, c);


//  indice       0  1  2  3  4  5  6  7  8
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto]= num; /* Se colocarmos espaços vazios , , vamos pular valores*/


//indices               1          2          3
//indices            0  1  2    0  1  2    0  1  2  
const vetorVetor = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(vetorVetor[1][2]);
const [,[,,seis]] = vetorVetor;
console.log(seis , ' esse passo');

const [lista1, lista2, lista3] = vetorVetor;

console.log(lista3[2]);

/*
Pode ser chamado de  ... rest ou ...spread operator

por que tanto pode pegar o resto dos valores como também ele pode espalhar
*/


console.log(resto) // pega o resto dos valores
console.log(primeiroNumero, segundoNumero); /* vai pegar só os 2 valore */
console.log(num[0]); // ver os valores