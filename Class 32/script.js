const nomes = ['Estevão', 'Jordanna', 'Kelle', 'Lorena', 'Maya'];


// For of - Retorna o valor em si (Iteráveis, Arrays or Strings)

for (let valor of nomes) {
    console.log(valor)
}

console.log('##############')

// For classic - Geralmente p/ iteráveis (Arrays or Strings)


for( let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
};

console.log('##############')

// For in - Retorna Índice ou chaves (Strings, Objects or Arrays)

for( let i in nomes){
    console.log(nomes[i])
};


console.log('##############')

nomes.forEach(function(valor, indice, array)  {
    console.log(valor, indice, array)
});







