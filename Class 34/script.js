const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua p/ próxima iteração;

// Break sai do laço;

// ---------------- FOR OF

for(let numero of numeros){
    if (numero === 2 || numero === 5){ // Par
        console.log('Pulei o número 2 e 5!')
        continue;  // ele vai voltar ao começo do laço mas na proxima iteração
    }
    if (numero === 7){
        console.log('Pulei o número 7!')
        continue;
    }

    if (numero === 8){
        console.log('Número 8 encontrado, saindo!')
        break;
    }

    console.log(numero);
}

console.log('AGORA COM FOR IN .......................')

// ---------------- FOR IN

for(let i in numeros){
    let numero = numeros[i]

    if (numero === 2 || numero === 5){ // Par
        console.log('Pulei o número 2 e 5!')
        continue;  // ele vai voltar ao começo do laço mas na proxima iteração
    }
    if (numero === 7){
        console.log('Pulei o número 7!')
        continue;
    }

    if (numero === 8){
        console.log('Número 8 encontrado, saindo!')
        break;
    }

    console.log(numero);
}


console.log('AGORA COM FOR CLASSICO .......................')

// ---------------- FOR CLASSICO

for(let i = 0; i <= numeros.length; i++){
    let numero = numeros[i]

    if (numero === 2 || numero === 5){ // Par
        console.log('Pulei o número 2 e 5!')
        continue;  // ele vai voltar ao começo do laço mas na proxima iteração
    }
    if (numero === 7){
        console.log('Pulei o número 7!')
        continue;
    }

    if (numero === 8){
        console.log('Número 8 encontrado, saindo!')
        break;
    }

    console.log(numero);
}

console.log('AGORA COM WHILE .......................')

// ---------------- WHILE

    let i = 0;  
    while (i < numeros.length){
        let numero = numeros[i];

        if (numero === 2 || numero === 5){
            console.log('Pulei o número 2 e 5!');
            i++;
            continue;  // ele vai voltar ao começo do laço mas na proxima iteração
        }

        if (numero === 7){
            console.log('Pulei o número 7!');
            i++;
            continue;
        }

        if (numero === 8){
            console.log('Número 8 encontrado, saindo!');
            i++;
            break;
        }


        console.log(numero); // imprime os valores do numero

        i++;
    }

console.log('AGORA COM  DO WHILE .......................')

// ---------------- DO WHILE

let j = 0;
do {
    let numero = numeros[j];

    if (numero === 2 || numero === 5){
        console.log('Pulei o número 2 e 5!')
        j++;
        continue;  // ele vai voltar ao começo do laço mas na proxima iteração
    }

    if (numero === 7){
        console.log('Pulei o número 7!')
        j++;
        continue;
    }

    if (numero === 8){
        console.log('Número 8 encontrado, saindo!')
        j++;
        break;
    }

    console.log(numero); // imprime os valores do numero

    j++;

} while (j < numeros.length);
