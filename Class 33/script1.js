let i = 0;
const nome = 'Luiz';
let j = 0;

while (j < nome.length){ // vai varrer o indice da variavel nome
    console.log(nome[j]) // vai exibir o indice
    j++;
}

console.log('#########')

while (i <= 10){
    console.log(i);
    i++; // sem essa linha o i nunca vai chegar a 10 e ai vai travar o computador, "for infinito"
}
