// return
// retorna um valor
// termina a função

function soma(a, b){
    return a + b;
}

soma(5, 2)

function soma2(a, b){ // essa função não retorna nada
    console.log(a + b); 
}

soma2(5, 2)


/*
document.addEventListener('click', function(){ // igual a  .onclick
    document.body.style.backgroundColor = 'red'; 
});

*/

function criaPessoa(nome, sobrenome){
    return{
        nome, sobrenome // chave nome, chave sobrenome nome: nome, sobrenome: sobrenome
    }
}

const p1 = criaPessoa('Estevão', 'Fernandes') // essa função substitui o trabalho de criar os objects
const p2 = {
    nome: 'Estevão',
    sobrenome: 'Fernandes'
};

console.log(p1, typeof p1)
console.log(p2, typeof p2)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

/*
const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo!')) 
*/

const fala = falaFrase('Olá');
const resto = fala('mundo!')
console.log(resto)


function criaMultiplicador(multiplicador){ // função do tipo closure;
    return function (n){
        return n * multiplicador;
    }
}

const multiplicadorEspecifico = criaMultiplicador(5) // tenho que criar uma outra função que faz a função da função cria
for (let n = 1; n <= 50; n++){
    console.log(`5 x ${n} = ${multiplicadorEspecifico(5)}`)
}
