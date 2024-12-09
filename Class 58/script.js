const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let valor of a1) { // for of
    console.log(valor);
}

console.log('----------------------------------')


let total = 0
a1.forEach(function(valor, indice, array){
    total += valor;
    console.log(valor, indice);
});

console.log(total);