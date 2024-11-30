let nome = 'Estevão'; // Criando
var nome2 = 'Estevão';
const verdadeira = true

// let nome = 'Fernandes' n podemos redeclarar
// var nome2 = 'Fernandes' sobrescreve
// criando

if (verdadeira){
    let nome = 'Fernandes'; // Criando
    var nome2 = 'Outra coisa'
    // console.log(nome, nome2);
    if (verdadeira) { // bloco aninhado
        var nome2 = 'Fernandes' // Redeclarando
         let nome = 'Estevão 2' // Criando 
        //console.log(nome, nome2);
    }
}

console.log(nome, nome2)

/*
Podemos ver que, quando fazemos o uso da var nome2 redeclaramos ela e ela assume o ultimo valor recebido;

o let ele procura em cada escopo a variavel solicitada;
*/

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função



var ano = 2010

function falaOi() {
    // var idade = 12
    // console.log(ano);
    if (verdadeira){
        let idade2 = 26
        console.log(ano)
    }

// console.log(idade2) erro

}


/* 
EM RESUMO: 
EU POSSO CHAMAR A VAR FORA DA FUNÇÃO, MAS NÃO POSSO CHAMAR A LET FORA DA FUNÇÃO
*/

// console.log(idade);

falaOi()



// console.log(hora) 
// console.log(hora2)

/* 
se chamarmos a variavel com var antes de ser declarada, nos deparamos com o undefined. Por que ele faz uma coisa chamar hoistin */


let hora2 = '10:48' // da erro
var hora = '10:48'