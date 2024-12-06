function funcao(a, b, c){
    //console.log('Olá')
    //console.log(arguments)
    let total = 0;
    for(argumento of arguments){ // não funciona em arrow function
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(/*'Valor',*/ 1, 2, 3, 4, 5, 6, 7, 8, 9/*, 'Estevão'*/);

/*
A função definida com a palavra function tem uma variavel especial argumentos que sustenta todos os argumentos enviados


mesmo que adicionemos um parametro (a, b, c)
mas tenhamos os argumentos (1, 2, 3, 4, 5) e o (1, 2, 3) entrão no parametro, mas o 4, 5 ficam na função arguments além dos que já estão no argumento;
*/ 


function funcao2(a, b = 0, c =1){ // b assume um valor padrão 0
    console.log(a + b + c)
}
funcao2(2, 10); // se dermos '', 'estevão'

function funcao3({nome, sobrenome, idade}){ // desestruturação - retirando as variaveis
    console.log(nome, sobrenome, idade)
}
let object = {nome: 'Estevão',
     sobrenome: 'Fernandes',
      idade: 26}
funcao3(object /* {nome: 'Estevão', sobrenome: 'Fernandes', idade: 26} */);


function funcao4([valor1, valor2, valor3]){ // desestruturação - retirando as variaveis
    console.log(valor1, valor2, valor3);
}
let array  = ['Estevão', 'Fernandes', 26]
funcao4(array /* ['Estevão', 'Fernandes', 26] */);

// tanto faz se for uma constante como função ou função comum
const conta = function (operador, acumulador, ...numeros){ // se usarmos o operador rest ou um vetor pra assumir o valor de todos os números;
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
};

conta('-', 1, 20, 30, 40, 50)