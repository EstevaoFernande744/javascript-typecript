// Declaração de função (Function hoisting);

falaOi() // da no mesmo

function falaOi(){ 
    console.log('Olá');
}

falaOi() // da no mesmo

// First-class objects (I) - Objetos de primeira classe
// Function expression 


// transforma uma função em um dado e consegue chamar esse dado da mesma forma de uma função!
const souUmDado = function() {
    console.log('Sou um dado!');
};
souUmDado();

function executaFuncao(funcao){ // usamos uma função como parametro 
    console.log('Vou executar a sua função abaixo:')
    funcao()
};

executaFuncao(souUmDado);

// Arrow Function   
const functionArrow = (/*  */) => {
    console.log('Sou uma arrow function')
};

functionArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
   /* falar: function (){
        console.log('Estou falando...')
    }*/
};
obj.falar();