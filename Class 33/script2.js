function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
} 

const min = 1;   // valor minimo
const max = 50;  // valor maximo 
let rand = random(min, max);

// while checa a condição e executa o laço

while (rand !== 10){ // rodar ate a variavel ser diferente de 10
    rand = random(min, max); // vamos atualizar o valor da variavel
    console.log(rand);
}

console.log('Chegou no 10....')

// executa o laço depois checa a condição

do {
    rand = random(min, max);
    console.log(rand);
}  while (rand !== 10);